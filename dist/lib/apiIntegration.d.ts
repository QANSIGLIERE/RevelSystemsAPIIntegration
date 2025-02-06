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
    Order: string;
    getOrderByID(id: any): Promise<any>;
    downloadOrder(running_tax_number?: string, web_order?: string, has_items?: string, registry_data?: string, id?: string, call_number?: string, uuid?: string, created_by?: string, closed?: string, establishment?: string, updated_date?: string, delivery_employee?: string, pickup_time?: string, dining_option?: string, call_name?: string, printed?: string, device_id?: string, customer?: string, is_invoice?: string, local_id?: string, created_date?: string, external_sync?: string, has_history?: string, additional_filters?: string): Promise<any>;
    getEstablishmentByID(id: any): Promise<any>;
    downloadEstablishment(id?: string, additional_filters?: string): Promise<any>;
    getEmployeeByID(id: any): Promise<any>;
    downloadEmployee(updated_date?: string, last_timesheet_entry?: string, created_date?: string, id?: string, user?: string, additional_filters?: string): Promise<any>;
    getAddressByID(id: any): Promise<any>;
    downloadAddress(is_external?: string, additional_filters?: string): Promise<any>;
}
//# sourceMappingURL=apiIntegration.d.ts.map