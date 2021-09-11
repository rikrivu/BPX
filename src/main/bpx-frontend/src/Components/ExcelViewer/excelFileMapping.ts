import { ExcelViewerFileConfig } from "./ExcelViewerModels";

export const excelFileMapping: ExcelViewerFileConfig = {
    'Air Permit': 'Air_Permit',
    'Storm Water Permit': 'Storm_Water_Permit',
    'Injection Well Permit': 'Injection_Well_Permit',
    // 'Water Reservoirs Permit': 'Water_Reservoirs_Permit',
    'Water Wells/Reservoirs Permits': 'Water_Reservoirs_Permit',
    'EPA Class V Cathodic Protection': 'EPA_Class_V_Cathodic_Protection',
    // 'North & South Evap. Ponds': 'North_&_South_Evap._Ponds',
    'North & South Evap. Ponds': 'North_&_South_Evap._Ponds_adarsh'
}

export const actionColumnNameKeywords: string[] = [
    'File Name',
    'Facility Number'
]