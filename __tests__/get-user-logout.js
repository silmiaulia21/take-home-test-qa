const { describe } = require('@jest/globals')
const userLogout = require('../collections/get-user-logout')
const verify = require('../utilities/verifier')

const verifier = new verify()

let testData = require('require-all')({
    dirname: __dirname + '/../test-data/get-user-logout'
});

describe('GET USER LOGOUT', () => {
    test.each(Object.values(testData))(
        "$title ", async ({ header, param, expected_result }) => {

            res = await userLogout.getUserLogout(header, param)

            verifier.verifyResponse(res, expected_result)
        })
})

