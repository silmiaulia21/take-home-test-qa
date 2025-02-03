const { describe, test } = require('@jest/globals');
const userChange = require('../collections/post-user-change-password');
const verify = require('../utilities/verifier');

const verifier = new verify();

let testData = require('require-all')({
    dirname: __dirname + '/../test-data/post-user-change-password'
});

describe('POST USER CHANGE PASSWORD', () => {
    test.each(Object.values(testData))(
        "$title", async ({ title, header, body, expected_result }) => {
            let res;
            
                       
            res = await userChange.postUserChangePassword(header, body);
            verifier.verifyResponse(res, expected_result);
        }
    );
});
