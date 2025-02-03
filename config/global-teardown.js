const globalVariable = require('../global-variables.json');
const request = require('supertest');

module.exports = async function (globalConfig, projectConfig) {
    await logoutUser();
};

async function logoutUser() {
    let endPoint = `/users/${globalVariable.__USER_ID__}/logout`; // Sesuaikan endpoint jika perlu
    console.log(`Logging out: GET ${endPoint}`);

    let header = {
        "accept": "application/json",
        "Authorization": `Bearer ${globalVariable.__TOKEN__}`
    };

    try {
        let res = await request(globalVariable.__URL__).get(endPoint).set(header);
        console.log("Logout Response:", res.body);
        return res.body;
    } catch (error) {
        console.error("Logout failed:", error);
    }
};
