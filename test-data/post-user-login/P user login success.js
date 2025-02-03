const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {
        "accept": "application/json",

    },
    "body": {
        "email": "",
        "password": "Hariminggu40!"
    },
    "expected_result": {
        "status_code": 200,
        "body": {
            "token_type": "bearer",
            "expires_in": 300
        },
        "json_schema": {
            "type": "object",
            "required": [
                "access_token",
                "token_type",
                "expires_in"
            ],
            "additionalProperties": false,
            "properties": {
                "access_token": {
                    "type": "string"
                },
                "token_type": {
                    "type": "string"
                },
                "expires_in": {
                    "type": "integer"
                }
            }


        }
    },
}


module.exports = test_data;