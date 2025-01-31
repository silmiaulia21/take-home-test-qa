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
        "country": "Indonesia",
        "postcode": "17137",
        "phone": "081385253285",
        "dob": "2000-08-21",
        "password": "Tokouni12345!",
        "email": ""

    },
    "expected_result": {
        "status_code": 201,
        "body": {
            "first_name": "Silmi",
            "last_name": "Aulia Hasanah",
            "address": "Jl.Merak II No.70",
            "city": "Bekasi",
            "state": "Jawa Barat",
            "country": "Indonesia",
            "postcode": "17137",
            "phone": "081385253285",
            "dob": "2000-08-21"
        },
        "json_schema": {
            "type": "object",
            "required": [
                "first_name",
                "last_name",
                "address",
                "city",
                "state",
                "country",
                "postcode",
                "phone",
                "dob",
                "email",
                "id",
                "created_at"
            ],
            "additionalProperties": false,
            "properties": {
                "first_name": {
                    "type": "string"
                },
                "last_name": {
                    "type": "string"
                },
                "address": {
                    "type": "string"
                },
                "city": {
                    "type": "string"
                },
                "state": {
                    "type": "string"
                },
                "country": {
                    "type": "string"
                },
                "postcode": {
                    "type": "string"
                },
                "phone": {
                    "type": "string"
                },
                "dob": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                }

            }

        },
    }
}

module.exports = test_data;