const { describe } = require('@jest/globals')
const userMe = require('../collections/get-user-me')
const verify = require('../utilities/verifier')

const verifier = new verify()

let testData = require('require-all')({
    dirname: __dirname + '/../test-data/get-user-me'
});



describe('GET USER ME', () => {
    test.each(Object.values(testData))(
        "$title ", async ({ header, param, expected_result }) => {

            res = await userMe.getUserMe(header, param)
        
            verifier.verifyResponse(res, expected_result)
        })
})

