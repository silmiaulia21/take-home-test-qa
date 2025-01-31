const restApiCaller = require('../callers/rest-api');

async function postUserLogin(header, body) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: '/users/login',
        header: header,
        body: body
    })
    const res = await caller.post()
    return res
}

module.exports = {
    postUserLogin
};