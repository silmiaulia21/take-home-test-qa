const globalVariable = require('../global-variables.json');
const request = require('supertest');
const fs = require('fs');

module.exports = async function (globalConfig, projectConfig) {
    await logoutUser();
};

async function logoutUser() {
    let endPoint = '/users/' + globalVariable.__USER_ID__;
    console.log(endPoint)
    let header = {
        "accept": "application/json",
        "Authorization": `Bearer ${globalVariable.__TOKEN__}`
    };
    let body = {};
    let res = await request(globalVariable.__URL__).del(endPoint).set(header).send(body);
    return res.body;
};