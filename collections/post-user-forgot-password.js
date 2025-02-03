const restApiCaller = require('../callers/rest-api');

async function postUserForgotPassword(header, body) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: '/users/forgot-password',
        header: header,
        body: body
    })
    const res = await caller.post()
    return res
}


module.exports = {
    postUserForgotPassword
};
