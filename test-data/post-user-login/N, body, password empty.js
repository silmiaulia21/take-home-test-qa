const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {
        "accept": "application/json"
    },
    "body": {
        "email": __EMAIL__,
        "password": "",
    },
    "expected_result": {
        "status_code": 401,
        "body": {
            
                "error": "Invalid login request"
    
        },
        "json_schema": {
            "type": "object",
            "required": [
                "error"
            ],
            "additionalProperties": false,
            "properties": {
                "error": {
                    "type": "string"
                }
            }
        }
    }
}

module.exports = test_data;