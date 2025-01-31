const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {
        "accept": "application/json"
    },
    "body": {
        "first_name": "Silmi",
        "last_name": "Aulia Hasanah",
        "address": "",
        "city": "Bekasi",
        "state": "Jawa Barat",
        "country": "Indonesia",
        "postcode": "17137",
        "phone": "081385253285",
        "dob": "2000-08-21",
        "password": "Tokouni12345!",
        "email": ""
    },
    "expected_result": {
        "status_code": 422,
        "body": {
            "address": [
                "The address field must be a string."
            ]
        },
        "json_schema": {

            "type": "object",
            "type": "object",
            "default": {},
            "title": "Root Schema",
            "required": [
                "address"
            ],
            "properties": {
                "address": {
                    "type": "array",
                    "default": [],
                    "title": "The address Schema",
                    "items": {
                        "type": "string",
                        "default": "",
                        "title": "A Schema",
                        "examples": [
                            "The address field must be a string."
                        ]
                    },
                    "examples": [
                        [
                            "The address field must be a string."]
                    ]
                }
            },
            "examples": [{
                "address": [
                    "The address field must be a string."
                ]
            }]
        }
    }
}

module.exports = test_data;
