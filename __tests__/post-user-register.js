const { describe } = require('@jest/globals')
const userRegister = require('../collections/post-user-register')
const verify = require('../utilities/verifier')
const {generateRandomEmail} = require('../utilities/helper')


const verifier = new verify()

let testData = require('require-all')({
    dirname: __dirname + '/../test-data/post-user-register'
});


describe('POST USER REGISTER', () => {
    test.each(Object.values(testData))(
        "$title ", async ({ title, email, header, body, expected_result }) => {

            if(title.includes('register success')) { 
                email = generateRandomEmail()
                body["email"] = email
            }
            res = await userRegister.postUserRegister(header, body)
            verifier.verifyResponse(res, expected_result)
        })
})

