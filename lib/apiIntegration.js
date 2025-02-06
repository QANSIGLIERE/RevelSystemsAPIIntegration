var { get, download } = require('qansigliere-axios-utils');

class RevelSystemsAPI {
    constructor(url = '', apiKey = '', apiSecret = '') {
        this.url = url ? url : process.env.REVELSYSTEMS_URL;
        this.headers = {
            'user-agent': 'QANSIGLIERE',
            'content-type': 'application/json',
            accept: 'application/json',
            'API-AUTHENTICATION': `${apiKey ? apiKey : process.env.REVELSYSTEMS_APIKEY}:${
                apiSecret ? apiSecret : process.env.REVELSYSTEMS_APISECRET
            }`,
        };
        this.headersFormData = {
            'user-agent': 'QANSIGLIERE',
            accept: 'application/json',
            'API-AUTHENTICATION': `${apiKey ? apiKey : process.env.REVELSYSTEMS_APIKEY}:${
                apiSecret ? apiSecret : process.env.REVELSYSTEMS_APISECRET
            }`,
        };

        this.Address = 'resources/Address/';
        this.Employee = 'resources/Employee/';
    }

    async getEmployeeByID(id) {
        return await get(this.url, `${this.Employee}${id}/`, this.headers);
    }

    async downloadEmployee(
        updated_date = '',
        last_timesheet_entry = '',
        created_date = '',
        id = '',
        user = '',
        additional_filters = '',
    ) {
        let url = this.Employee + '?';
        if (updated_date) url += `updated_date=${updated_date}&`;
        if (last_timesheet_entry) url += `last_timesheet_entry=${last_timesheet_entry}&`;
        if (created_date) url += `created_date=${created_date}&`;
        if (id) url += `id=${id}&`;
        if (user) url += `user=${user}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getAddressByID(id) {
        return await get(this.url, `${this.Address}${id}/`, this.headers);
    }

    async downloadAddress(is_external = '', additional_filters = '') {
        let url = this.Address + '?';
        if (is_external) url += `is_external=${is_external}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }
}

module.exports.RevelSystemsAPI = RevelSystemsAPI;
