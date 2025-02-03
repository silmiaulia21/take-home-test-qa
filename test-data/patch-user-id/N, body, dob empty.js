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
        "state": "Jawa Barat",
        "country": "Indonesia",
        "postcode": "17137",
        "phone": "085811023534",
        "dob": "",
        "password": "Tokouni12345!"

    },
    "expected_result": {
        "status_code": 422,
        "body": {
            "dob": [
                "The dob field must be a valid date.",
                "The dob field must match the format Y-m-d.",
                "Customer must be 18 years old."
            ]
        },
        "json_schema": {
            "type": "object",
            "required": [
                "dob"
            ],
            "additionalProperties": false,
            "properties": {
                "dob": {
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