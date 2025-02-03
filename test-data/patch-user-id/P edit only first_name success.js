const path = require('path');
const scriptName = path.basename(__filename);
const test_data = {
    "title": scriptName,
    "header": {
        "accept": "application/json",
        "Authorization": ""
    },
    "body": {
        "first_name": "Silmi Testing 01"

    },
    "expected_result": {
        "status_code": 200,
        "body": {
            "success": true
        },

        "json_schema": {
            "type": "object",
            "required": [
                "success"
            ],
            "additionalProperties": false,
            "properties": {
                "success": {
                    "type": "boolean"
                }
            }
        }
    }
};

module.exports = test_data;