const { describe } = require('@jest/globals');
const verify = require('../utilities/verifier');
const userLogin= require('../collections/post-user-login');

const verifier = new verify()

let testData = require('require-all')({
    dirname: __dirname + '/../test-data/post-user-login'
});



describe('POST USER LOGIN', () => {
    test.each(Object.values(testData))(
        "$title ", async ({header, body, expected_result }) => {

            res = await userLogin.postUserLogin(header, body)
            verifier.verifyResponse(res, expected_result)
        })
})

