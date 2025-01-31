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
        "phone": "081385253285",
        "dob": "2000-08-21",
        "password": "",
        "email": ""
    },
    "expected_result": {
        "status_code": 422,
        "body": {
            "password": [
                "The password field is required."
            ]
        },
        "json_schema": {
            "type": "object",
            "default": {},
            "title": "Root Schema",
            "required": [
                "password"
            ],
            "properties": {
                "password": {
                    "type": "array",
                    "default": [],
                    "title": "The password Schema",
                    "items": {
                        "type": "string",
                        "examples": [
                            "The password field is required."
                        ]
                    }
                }
            },
            "examples": [
                {
                    "password": [
                        "The password field is required."
                    ]
                }
            ]
        }
    }
};

module.exports = test_data;
