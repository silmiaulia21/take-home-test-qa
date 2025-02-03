const { describe } = require('@jest/globals')
const userRefresh = require('../collections/get-user-refresh')
const verify = require('../utilities/verifier')
const login = require('../collections/post-user-login')
const registerUser = require('../collections/post-user-register')
const loginSuccess = require('../test-data/post-user-login/P user login success')
const registerSuccess = require('../test-data/post-user-register/P, user register success')
const { generateRandomEmail } = require('../utilities/helper')

const verifier = new verify()

let testData = require('require-all')({
    dirname: __dirname + '/../test-data/get-user-refresh'
});


describe('GET USER REFRESH', () => {
    test.each(Object.values(testData))(
        "$title ", async ({ header, param, expected_result }) => {

            res = await userRefresh.getUserRefresh(header, param)
            verifier.verifyResponse(res, expected_result)
        })  
})


