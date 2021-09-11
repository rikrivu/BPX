import { RadioButtonOption } from '../Components/RadioButtonGroup/RadioButtonGroupModels';

// export const API_ENDPOINT: string = 'http://localhost:8085/api/';
export const API_ENDPOINT: string = '/api/';
// export const PAGE_SIZE: number = 30;
export const PAGE_SIZE: number = 1500;

export const storageAccessToken: string = '?sv=2020-02-10&ss=b&srt=sco&sp=rwdlacx&se=2021-10-26T16:48:00Z&st=2021-03-26T08:48:00Z&spr=https&sig=%2FLc1Wdf5BfR1I9rrDNlja0EJ1zBGCF7yn7vXNW1xC%2Bg%3D';
export const storageUri: string = 'https://bridgei2i.blob.core.windows.net/?sv=2020-02-10&ss=b&srt=sco&sp=rwdlacx&se=2021-10-26T16:48:00Z&st=2021-03-26T08:48:00Z&spr=https&sig=%2FLc1Wdf5BfR1I9rrDNlja0EJ1zBGCF7yn7vXNW1xC%2Bg%3D';
export const blobStorageContainerName: string = 'bpx-permits';
export const DATE_RANGE_CHECK: number = 60 * 60 * 24 * 1000;  // 1day in milliseconds

export const radioButtonOptions: RadioButtonOption[] = [
    {
        name: 'Air Permit',
        id: 'Air_Permit'
    },
    {
        name: 'Storm Water Permit',
        id: 'Storm_Water_Permit'
    },
    {
        name: 'Injection Well Permit',
        id: 'Injection_Well_Permit'
    },
    {
        name: 'Water Wells/Reservoirs Permits',
        id: 'Water_Reservoir_Permit'
    },
    {
        name: 'EPA Class V Cathodic Protection',
        id: 'EPA_Class_V_Cathodic_Protection'
    },
    {
        name: 'North & South Evap. Ponds',
        id: 'North_&_South_Evap._Ponds'
    }
]