import { createContext } from 'react';
import { BlobDownloadsViewStateService } from '../services/BlobDownloadsViewState';
import { BlobSharedViewStateService } from '../services/BlobSharedViewState';
import { BlobStorageService } from '../services/BlobStorageService';

const blobStorage = new BlobStorageService();
const sharedViewState = new BlobSharedViewStateService(blobStorage);
const downloadsViewState = new BlobDownloadsViewStateService(
  blobStorage,
  sharedViewState
);

export const SharedViewStateContext = createContext(sharedViewState);
export const DownloadsViewStateContext = createContext(downloadsViewState);
