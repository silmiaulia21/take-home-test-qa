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
        "city": "",
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
            "city": [
                "The city field must be a string."
            ]
        },
        "json_schema": {
            "type": "object",
            "default": {},
            "title": "Root Schema",
            "required": [
                "city"
            ],
            "properties": {
                "city": {
                    "type": "array",
                    "default": [],
                    "title": "The city Schema",
                    "items": {
                        "type": "string",
                        "examples": [
                            "The city field must be a string."
                        ]
                    }
                }
            },
            "examples": [
                {
                    "city": [
                        "The city field must be a string."
                    ]
                }
            ]
        }
    }
};

module.exports = test_data;
