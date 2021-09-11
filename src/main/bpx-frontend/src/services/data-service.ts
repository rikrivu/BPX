import { SortFilterState } from "../Components/AgGridTable/agGridModels";
import { API_ENDPOINT, PAGE_SIZE } from "../utils/appConstants"
import { FacilityAPIResponse } from "../Views/FacilityTable/FacilityTableModels";
import { PermitAPIResponse } from "../Views/PermitTable/PermitTableModels";

let facilityAbortController: AbortController = new AbortController();
let fileListAbortController: AbortController = new AbortController();

export const getFacility = async (permitType: string, sortFilterState: SortFilterState): Promise<FacilityAPIResponse> => {
    facilityAbortController.abort();
    facilityAbortController = new AbortController();
    const res = await fetch(
        API_ENDPOINT +
        // 'facility?' +
        'facilities?' +
        'page=' + sortFilterState.page +
        '&size=' + PAGE_SIZE +
        '&sortBy=' + sortFilterState.criteria +
        '&order=' + sortFilterState.state +
        '&filter=' + permitType,
        {signal: facilityAbortController.signal}
    );
    return await res.json();
}

export const getPermits = async (facilityId: string, sortFilterState: SortFilterState): Promise<PermitAPIResponse> => {
    const res = await fetch(
        API_ENDPOINT + 'permit?' +
        'sortBy=' + sortFilterState.criteria +
        '&order=' + sortFilterState.state + 
        '&facilityId=' + facilityId
    )
    return await res.json();
}

export const getPDF = async (facilityId: string, permitId: string): Promise<any> => {
    const res = await fetch(API_ENDPOINT + 'download/permit?facilityId=' + facilityId + '&permitId=' + permitId);
    // console.log('PDF Res', res.headers.get('Content-Disposition'));
    return res;
}

export const getPDFByFileName = async (fileName: string): Promise<any> => {
    const res = await fetch(API_ENDPOINT + 'download/application?fileName=' + fileName);
    return res;
}

export const getFileList = async (facilityId: string): Promise<string[]> => {
    fileListAbortController.abort();
    fileListAbortController = new AbortController();
    const res = await fetch(API_ENDPOINT + 'list/file?facilityId=' + facilityId, {signal: fileListAbortController.signal});
    return await res.json();
}