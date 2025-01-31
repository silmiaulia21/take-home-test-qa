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
        "address": "Jl.Merak II No.70",
        "city": "Bekasi",
        "state": "Jawa Barat",
        "country": "",
        "postcode": "17137",
        "phone": "081385253285",
        "dob": "2000-08-21",
        "password": "Tokouni12345!",
        "email": ""
    },
    "expected_result": {
        "status_code": 422,
        "body": {
            "country": [
                "The country field must be a string."
            ]
        },
        "json_schema": {

            "type": "object",
            "type": "object",
            "default": {},
            "title": "Root Schema",
            "required": [
                "country"
            ],
            "properties": {
                "country": {
                    "type": "array",
                    "default": [],
                    "title": "The country Schema",
                    "items": {
                        "type": "string",
                        "default": "",
                        "title": "A Schema",
                        "examples": [
                            "The country field must be a string."
                        ]
                    },
                    "examples": [
                        [
                            "The country field must be a string."]
                    ]
                }
            },
            "examples": [{
                "country": [
                    "The country field must be a string."
                ]
            }]
        }
    }
}

module.exports = test_data;