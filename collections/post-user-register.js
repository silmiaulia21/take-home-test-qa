const restApiCaller = require('../callers/rest-api');

async function postUserRegister(header, body) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: '/users/register',
        header: header,
        body: body
    })
    const res = await caller.post()
    return res
}


module.exports = {
    postUserRegister
};
