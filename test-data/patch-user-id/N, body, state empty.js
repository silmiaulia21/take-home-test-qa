const path = require('path');
const scriptName = path.basename(__filename);
const test_data = {
    "title": scriptName,
    "header": {
        "accept": "application/json",
        "Authorization": ""
    },
    "body": {
        "first_name": "Silmi",
        "last_name": "Aulia Hasanah",
        "address": "JL. Merak",
        "city": "Bekasi",
        "state": "",
        "country": "Indonesia",
        "postcode": "17137",
        "phone": "085811023534",
        "dob": "2000-08-21",
        "password": "Tokouni12345!"

    },
    "expected_result": {
        "status_code": 422,
        "body": {
            "state": [
                "The state field must be a string."
            ]
        },
        "json_schema": {
            "type": "object",
            "required": [
                "state"
            ],
            "additionalProperties": false,
            "properties": {
                "state": {
                    "type": "array",
                    "additionalItems": false,
                    "items": {
                        "type": "string"
                    }
                }

            }
        }
    }
};

module.exports = test_data;