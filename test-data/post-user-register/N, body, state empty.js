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
        "state": "",
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
            "state": [
                "The state field is required."
            ]
        },
        "json_schema": {
            "type": "object",
            "required": [
                "state"
            ],
            "additionalProperties": false,
            "properties": {
                "state": {
                    "type": "array",
                    "additionalItems": false,
                    "items": {
                        "type": "string"
                    }
                }
            }
        }
    }
}

module.exports = test_data;