const { describe } = require('@jest/globals')
const verify = require('../utilities/verifier')
const userID = require('../collections/patch-user-id')
const login = require('../collections/post-user-login')
const registerUser = require('../collections/post-user-register')
const loginSuccess = require('../test-data/post-user-login/P user login success')
const registerSuccess = require('../test-data/post-user-register/P, user register success')
const { generateRandomEmail } = require('../utilities/helper')

const verifier = new verify()

let testData = require('require-all')({
    dirname: __dirname + '/../test-data/patch-user-id'
});

let register_user_id = null
let email = null

beforeEach(async () => {
    email = generateRandomEmail()
    registerSuccess.body["email"] = email
    res = await registerUser.postUserRegister(registerSuccess.header, registerSuccess.body)
    register_user_id = res.body.id
});


describe('Patch User Id', () => {
    test.each(Object.values(testData))(
        "Test $title ", async ({ title, header, body, expected_result }) => {
            let token = null

            loginSuccess.body["email"] = email
            // console.log(email)
          
            res = await login.postUserLogin(loginSuccess.header, loginSuccess.body)
            token = res.body.access_token

            if (!title.includes('token and user id') && !title.includes('auth')) {
                header["Authorization"] = `Bearer ${token}`;
            }
            if (title.includes('endpoint')) {
                register_user_id = null;
            } else if (!title.includes("email")){
                editEmail = generateRandomEmail()
                body["email"] = editEmail
                // console.log(editEmail)
            }

            res = await userID.patchUserId(header, body, register_user_id)
            verifier.verifyResponse(res, expected_result)
        });
})