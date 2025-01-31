const restApiCaller = require('../callers/rest-api')

async function patchUserId(header, body, id) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: '/user/'+id,
        header: header,
        body: body
    })
    const res = await caller.patch()
    return res
}


module.exports = {patchUserId};