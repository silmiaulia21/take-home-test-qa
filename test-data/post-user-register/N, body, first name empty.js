const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {
        "accept": "application/json"
    },
    "body": {
        "first_name": "",
        "last_name": "Aulia Hasanah",
        "address": "Jl.Merak II No.70 II No.70",
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
            "first_name": [
                "The first name field is required."
            ]
        },
        "json_schema": {
            "type": "object",
            "default": {},
            "title": "Root Schema",
            "required": [
                "first_name"
            ],
            "properties": {
                "first_name": {
                    "type": "array",
                    "default": [],
                    "title": "The first_name Schema",
                    "items": {
                        "type": "string",
                        "examples": [
                            "The first name field is required."
                        ]
                    }
                }
            },
            "examples": [
                {
                    "first_name": [
                        "The first name field is required."
                    ]
                }
            ]
        }
    }
};

module.exports = test_data;
