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
        "status_code": 400,
        "body": {
            "success": false,"message":"Your current password does not matches with the password."
        },

        "json_schema": {
            "type": "object",
            "required": [
                "success",
                "message"
            ],
            "additionalProperties": false,
            "properties": {
                "success": {
                    "type": "boolean"
                },
                "message": {
                    "type": "string"
                }
            }
        }
    }
};

module.exports = test_data;
