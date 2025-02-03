const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "header": {
        "accept": "application/json",
        "Authorization": `Bearer ${__TOKEN__}`
    },
    "param": {},
    "expected_result": {
        "status_code": 200,
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
            "email": "Balini210@gmail.com"
        },
        "json_schema": {
            "type": "object",
            "required": [
                "id",
                "provider",
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
                "totp_enabled",
                "created_at"
            ],
            "additionalProperties": false,
            "properties": {
                "id": {
                    "type": "string"
                },
                "provider": {
                    "type": "null"
                },
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
                "totp_enabled": {
                    "type": "integer"
                },
                "created_at": {
                    "type": "string"
                }
            }
        }
    }
};

module.exports = test_data;
