const globalVariable = require('../global-variables.json');
const request = require('supertest');

module.exports = async function (globalConfig, projectConfig) {
    console.log("--GLOBAL TEARDOWN--")
    let logout = await getLogout();
    console.log(logout);
   
};

async function getLogout() {
    let endPoint = '/users/logout';
    let header = {
        "accept": "application/json",
        "Authorization": `Bearer ${globalVariable.__TOKEN__}`
    };
    let param = {};

    let res = await request(globalVariable.__URL__).get(endPoint).set(header).send(param);
    return res.body;
}


