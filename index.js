var { RevelSystemsAPI } = require('./lib/apiIntegration.js');

(async function Demo() {
    let new_integration = new RevelSystemsAPI();
    let resp = await new_integration.downloadCustomerHistory();

    console.log(JSON.stringify(resp));
})();

module.exports.RevelSystemsAPI = RevelSystemsAPI;
