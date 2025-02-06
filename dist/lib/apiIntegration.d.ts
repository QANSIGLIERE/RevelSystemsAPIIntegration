export class RevelSystemsAPI {
    constructor(url?: string, apiKey?: string, apiSecret?: string);
    url: any;
    headers: {
        'user-agent': string;
        'content-type': string;
        accept: string;
        'API-AUTHENTICATION': string;
    };
    headersFormData: {
        'user-agent': string;
        accept: string;
        'API-AUTHENTICATION': string;
    };
    Address: string;
    Employee: string;
    Establishment: string;
    getEstablishmentByID(id: any): Promise<any>;
    downloadEstablishment(id?: string, additional_filters?: string): Promise<any>;
    getEmployeeByID(id: any): Promise<any>;
    downloadEmployee(updated_date?: string, last_timesheet_entry?: string, created_date?: string, id?: string, user?: string, additional_filters?: string): Promise<any>;
    getAddressByID(id: any): Promise<any>;
    downloadAddress(is_external?: string, additional_filters?: string): Promise<any>;
}
//# sourceMappingURL=apiIntegration.d.ts.map