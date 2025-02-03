const { describe } = require('@jest/globals')
const verify = require('../utilities/verifier')
const userLogin= require('../collections/post-user-login')
const registerUser = require('../collections/post-user-register')
const registerSuccess = require('../test-data/post-user-register/P, user register success')
const {generateRandomEmail} = require('../utilities/helper')

const verifier = new verify()

let testData = require('require-all')({
    dirname: __dirname + '/../test-data/post-user-login'
});

let email_user = null

beforeEach(async() => {
    email = generateRandomEmail()
    registerSuccess.body["email"] = email
    res = await registerUser.postUserRegister(registerSuccess.header, registerSuccess.body)
    email_user = res.body.email
  });

describe('POST USER LOGIN', () => {
    test.each(Object.values(testData))(
        "$title ", async ({title, header, body, expected_result }) => {

            if (!title.includes('login success' && 'email')){
                body["email"] = email_user
            }

            res = await userLogin.postUserLogin(header, body)
            verifier.verifyResponse(res, expected_result)
        })
})

