const restApiCaller = require('../callers/rest-api');

async function getUserMe(header, param) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: '/users/me',
        header: header,
        param: param
    })
    const res = await caller.get()
    return res
}


module.exports = {
    getUserMe
};