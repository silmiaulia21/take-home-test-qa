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
        "dob": "2000-08-21",
        "password": "Tokouni12345!",
        "email": "Balini210@gmail.com"
    },
    "expected_result": {
        "status_code": 403,
        "body": {
        },
        "json_schema": {
            "type": "object",
            "required": [
                "error"
            ],
            "additionalProperties": false,
            "properties": {
                "error": {
                    "type": "string"
                }
            }
        }
    }
};

module.exports = test_data;