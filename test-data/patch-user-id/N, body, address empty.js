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
        "address": "",
        "city": "Bekasi",
        "state": "Jawa Barat",
        "country": "Indonesia",
        "postcode": "17137",
        "phone": "085811023534",
        "dob": "2000-08-21",
        "password": "Tokouni12345!"

    },
    "expected_result": {
        "status_code": 422,
        "body": {
            "address": [
                "The address field is required."
            ]
        },
        "json_schema": {
            "type": "object",
            "required": [
                "address"
            ],
            "additionalProperties": false,
            "properties": {
                "address": {
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