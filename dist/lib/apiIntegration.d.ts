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
    getAddressByID(id: any): Promise<any>;
    downloadAddress(is_external?: string, additional_filters?: string): Promise<any>;
}
//# sourceMappingURL=apiIntegration.d.ts.map