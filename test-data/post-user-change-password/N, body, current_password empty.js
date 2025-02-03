const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {
        "accept": "application/json",
        "Authorization":`Bearer ${__TOKEN__}`
    },
    "body": {
        "new_password": "Tokouni12345!",
        "new_password_confirmation": "Tokouni12345!"
    },
    "expected_result": {
        "status_code": 422,
        "body": {
            "message": "The new password field is required."
        },
        "json_schema": {
            "type": "object",
            "required": [
                "message"
            ],
            "additionalProperties": false,
            "properties": {
                "message": {
                    "type": "string"
                }
            }
        }
    }
};

module.exports = test_data;
