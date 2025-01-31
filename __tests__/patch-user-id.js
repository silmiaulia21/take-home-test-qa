const { describe } = require('@jest/globals');
const verify = require('../utilities/verifier');
const userID = require('../collections/patch-user-id');

const verifier = new verify()

let testData = require('require-all')({
    dirname: __dirname + '/../test-data/patch-user-id'
});


describe('Patch User Id', () => {
    test.each(Object.values(testData))(
        "Test $title ", async ({ id, header, body, expected_result }) => {
            //console.log(id);
            res = await userID.patchUserId(header, body, id)
            verifier.verifyResponse(res, expected_result)
        });
})