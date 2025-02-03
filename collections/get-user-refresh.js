const restApiCaller = require('../callers/rest-api');

async function getUserRefresh(header, param) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: '/users/refresh',
        header: header,
        param: param
    })
    const res = await caller.get()
    return res
}


module.exports = {
    getUserRefresh
};