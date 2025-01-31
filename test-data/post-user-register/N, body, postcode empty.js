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
        "address": "Jl.Merak II No.70 II No.70",
        "city": "Bekasi",
        "state": "Jawa Barat",
        "country": "Indonesia",
        "postcode": "",
        "phone": "081385253285",
        "dob": "2000-08-21",
        "password": "Tokouni12345!",
        "email": ""
    },
    "expected_result": {
        "status_code": 422,
        "body": {
            "postcode": [
                "The postcode field must be a string."
            ]
        },
        "json_schema": {

            "type": "object",
            "type": "object",
            "default": {},
            "title": "Root Schema",
            "required": [
                "postcode"
            ],
            "properties": {
                "postcode": {
                    "type": "array",
                    "default": [],
                    "title": "The postcode Schema",
                    "items": {
                        "type": "string",
                        "default": "",
                        "title": "A Schema",
                        "examples": [
                            "The postcode field must be a string."
                        ]
                    },
                    "examples": [
                        [
                            "The postcode field must be a string."]
                    ]
                }
            },
            "examples": [{
                "postcode": [
                    "The postcode field must be a string."
                ]
            }]
        }
    }
}

module.exports = test_data;
