import { BehaviorSubject, MonoTypeOperatorFunction, Observable, OperatorFunction } from 'rxjs';
import { filter, finalize, map, scan, switchMap } from 'rxjs/operators';
import { storageAccessToken, storageUri } from '../../utils/appConstants';
  import {
    BlobContainerRequest,
    BlobItem,
    BlobStorageRequest,
    Dictionary
  } from '../types/azure-storage';
  import { BlobStorageService } from './BlobStorageService';
  
  export class BlobSharedViewStateService {

    private selectedContainerInner$ = new BehaviorSubject<string>('');

    containers$ = this.blobStorage.getContainers(this.getStorageOptions());

    itemsInContainer$ = this.selectedContainer$.pipe(
        filter(containerName => !!containerName),
        switchMap(containerName => this.blobStorage.listBlobsInContainer({
        ...this.getStorageOptions(),
        containerName
        }))
    )
  
    get selectedContainer$() {
      return this.selectedContainerInner$.asObservable();
    }
  
    constructor(private blobStorage: BlobStorageService) {}
  
    getContainerItems(containerName: string): void {
      this.selectedContainerInner$.next(containerName);
    }
  
    finaliseBlobChange = <T>(
      containerName: string
    ): MonoTypeOperatorFunction<T> => source =>
      source.pipe(
        finalize(
          () =>
            this.selectedContainerInner$.value === containerName &&
            this.selectedContainerInner$.next(containerName)
        )
      );
  
    scanEntries = <T extends BlobItem>(): OperatorFunction<T, T[]> => source =>
      source.pipe(
        map(item => ({
          [`${item.containerName}-${item.filename}`]: item
        })),
        scan<Dictionary<T>>(
          (items, item) => ({
            ...items,
            ...item
          }),
          {}
        ),
        map(items => Object.values(items))
      );
  
    getStorageOptionsWithContainer(): Observable<BlobContainerRequest> {
        return this.selectedContainer$.pipe(map(containerName => ({...this.getStorageOptions(), containerName})))
    }
  
    private getStorageOptions(): BlobStorageRequest {
      return {
          storageUri: storageUri,
          storageAccessToken: storageAccessToken
      };
    }
  }
  