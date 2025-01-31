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
        "postcode": "17137",
        "phone": "",
        "dob": "2000-08-21",
        "password": "Tokouni12345!",
        "email": ""
    },
    "expected_result": {
        "status_code": 422,
        "body": {
            "phone": [
                "The phone field must be a string."
            ]
        },
        "json_schema": {
            "type": "object",
            "default": {},
            "title": "Root Schema",
            "required": [
                "phone"
            ],
            "properties": {
                "phone": {
                    "type": "array",
                    "default": [],
                    "title": "The phone Schema",
                    "items": {
                        "type": "string",
                        "examples": [
                            "The phone field must be a string."
                        ]
                    }
                }
            },
            "examples": [
                {
                    "phone": [
                        "The phone field must be a string."
                    ]
                }
            ]
        }
    }
};

module.exports = test_data;
