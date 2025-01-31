const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {
        "accept": "application/json",
        "Authorization": "",
    },
    "param": {},
    "expected_result": {
        "status_code": 401,
        "body": {
            "message": "Unauthorized"
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
        },
    }
}

module.exports = test_data;