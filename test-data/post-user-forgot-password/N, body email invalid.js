const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {
        "accept": "application/json",
    },
    "body": {
        "email": "Pasarrebo1234@gmail.com",

    },
    "expected_result": {
        "status_code": 422,
        "body": {
            "message": "The selected email is invalid.",
            "errors": {
              "email": [
                "The selected email is invalid."
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
                        "email"
                    ],
                    "additionalProperties": false,
                    "properties": {
                        "email": {
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