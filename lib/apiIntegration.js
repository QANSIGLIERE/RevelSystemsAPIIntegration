var { get } = require('./axiosUtils.js');

class RevelSystemsAPI {
    constructor(url, apiKey, apiSecret) {
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
    }
}

module.exports.RevelSystemsAPI = RevelSystemsAPI;
