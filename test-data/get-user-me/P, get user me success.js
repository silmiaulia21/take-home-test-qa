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
            "id": "01jjx8adx0hxyvw97v08pa6gqr",
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
            "default": {},
            "title": "Root Schema",
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
                "email"
            ],
            "properties": {
                "first_name": {
                    "type": "string",
                    "default": "",
                    "title": "The first_name Schema",
                    "examples": [
                        "Silmi"
                    ]
                },
                "last_name": {
                    "type": "string",
                    "default": "",
                    "title": "The last_name Schema",
                    "examples": [
                        "Aulia Hasanah"
                    ]
                },
                "address": {
                    "type": "string",
                    "default": "",
                    "title": "The address Schema",
                    "examples": [
                        "Jl.Merak II No.70"
                    ]
                },
                "city": {
                    "type": "string",
                    "default": "",
                    "title": "The city Schema",
                    "examples": [
                        "Bekasi"
                    ]
                },
                "state": {
                    "type": "string",
                    "default": "",
                    "title": "The state Schema",
                    "examples": [
                        "Jawa Barat"
                    ]
                },
                "country": {
                    "type": "string",
                    "default": "",
                    "title": "The country Schema",
                    "examples": [
                        "Indonesia"
                    ]
                },
                "postcode": {
                    "type": "string",
                    "default": "",
                    "title": "The postcode Schema",
                    "examples": [
                        "17137"
                    ]
                },
                "phone": {
                    "type": "string",
                    "default": "",
                    "title": "The phone Schema",
                    "examples": [
                        "081385253285"
                    ]
                },
                "dob": {
                    "type": "string",
                    "default": "",
                    "title": "The dob Schema",
                    "examples": [
                        "2000-08-21"
                    ]
                },
                "email": {
                    "type": "string",
                    "default": "",
                    "title": "The email Schema",
                    "examples": [
                        "Balini210@gmail.com"
                    ]
                }
            },
            "examples": [{
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
            }]
        }
    }
};

module.exports = test_data;
