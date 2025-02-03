const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {
        "accept": "application/json",
        "Authorization":`Bearer ${__TOKEN__}`
    },
    "body": {
        "current_password": __PASSWORD__,
        "new_password": "",
        "new_password_confirmation": "Tokouni12345!"
    },
    "expected_result": {
        "status_code": 422,
        "body": {
            "message": "The new password field is required.",
            "errors": {
                "new_password": [
                    "The new password field is required."
                ]
            }
        },

        "json_schema": {
            "type": "object",
            "required": [
                "message",
                "errors"
            ],
            "additionalProperties": false,
            "properties": {
                "message": {
                    "type": "string"
                },
                "errors": {
                    "type": "object",
                    "required": [
                        "new_password"
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "new_password": {
                            "type": "array",
                            "additionalItems": false,
                            "items": {
                                "type": "string"
                            }
                        }
                    }
                }
            }
        }
    },
}


module.exports = test_data;