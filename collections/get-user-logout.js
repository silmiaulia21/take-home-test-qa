const restApiCaller = require('../callers/rest-api');

async function getUserLogout(header, param) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: '/users/logout',
        header: header,
        param: param
    })
    const res = await caller.get()
    return res
}


module.exports = {
    getUserLogout
};