const axios = require('axios');

async function get(baseURL, additionalPath, headers, debug = false) {
    let response = await axios(`https://${baseURL}/${additionalPath}`, {
        method: 'GET',
        headers: headers,
        redirect: 'follow',
    }).catch(function (error) {
        return error;
    });

    if (debug) {
        return [response.status, response.status == 200 ? response.data : response.response.data];
    } else {
        return response.status == 200 ? response.data : response.response.data;
    }
}
