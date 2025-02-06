var { RevelSystemsAPI } = require('./lib/apiIntegration.js');

(async function Demo() {
    let new_integration = new RevelSystemsAPI();
    let resp = await new_integration.downloadEstablishment(6);

    console.log(JSON.stringify(resp));
})();

module.exports.RevelSystemsAPI = RevelSystemsAPI;
