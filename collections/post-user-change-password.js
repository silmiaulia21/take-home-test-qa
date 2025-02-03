const restApiCaller = require('../callers/rest-api');

async function postUserChangePassword(header, body) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: '/users/change-password',
        header: header,
        body: body
    })
    const res = await caller.post()
    return res
}


module.exports = {
    postUserChangePassword
};
