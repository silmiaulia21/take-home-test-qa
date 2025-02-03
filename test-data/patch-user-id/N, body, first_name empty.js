const path = require('path');
const scriptName = path.basename(__filename);
const test_data = {
    "title": scriptName,
    "header": {
        "accept": "application/json",
        "Authorization": ""
    },
    "body": {
        "first_name": "",
        "last_name": "Aulia Hasanah",
        "address": "JL. Merak",
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
            "first_name": [
                "The first name field is required."
            ]
        },
        "json_schema": {
            "type": "object",
            "required": [
                "first_name"
            ],
            "additionalProperties": false,
            "properties": {
                "first_name": {
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