const { describe, test } = require('@jest/globals');
const UserForgotPassword = require('../collections/post-user-forgot-password');
const verify = require('../utilities/verifier');

const verifier = new verify();

let testData = require('require-all')({
    dirname: __dirname + '/../test-data/post-user-forgot-password'
});

describe('POST USER FORGET PASSWORD', () => {
 test.each(Object.values(testData))(
        "$title", async ({ header, body, expected_result }) => {
            
            const res = await UserForgotPassword.postUserForgotPassword(header, body);
            verifier.verifyResponse(res, expected_result);
        }
    );
});
