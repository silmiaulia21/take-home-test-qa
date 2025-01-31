const globalVariable = require('../global-variables.json');
const request = require('supertest');
const fs = require('fs');

module.exports = async function (globalConfig, projectConfig) {
    let Register = await getRegisterUser();

    globalVariable.__USER_ID__ = Register.id;

    console.log('Register : ' + Register.email)
    console.log('User ID : ' + globalVariable.__USER_ID__)

    let Login = await getLoginUser();

    globalVariable.__TOKEN__ = Login.access_token;

    console.log('Access Token : ' + globalVariable.__TOKEN__)
};

async function getRegisterUser() {
    let endPoint = '/users/register';
    let header = {
        "accept": "application/json",
        "Content-Type": "application/json"
    };
    let body = {
        "first_name": globalVariable.__FIRST_NAME__,
        "last_name": globalVariable.__LAST_NAME__,
        "address": globalVariable.__ADDRESS__,
        "city": globalVariable.__CITY__,
        "state": globalVariable.__STATE__,
        "country": globalVariable.__COUNTRY__,
        "postcode": globalVariable.__POST_CODE__,
        "phone": globalVariable.__PHONE_NUMBER__,
        "dob": globalVariable.__DOB__,
        "password": globalVariable.__PASSWORD__,
        "email": globalVariable.__EMAIL__
    };

    let res = await request(globalVariable.__URL__).post(endPoint).set(header).send(body);
    return res.body;
}


async function getLoginUser() {
    let endPoint = '/users/login';
    let header = {
        "accept": "application/json",
        "Content-Type": "application/json"
    };
    let body = {
        "password": globalVariable.__PASSWORD__,
        "email": globalVariable.__EMAIL__
    };

    let res = await request(globalVariable.__URL__).post(endPoint).set(header).send(body);
    return res.body;
}