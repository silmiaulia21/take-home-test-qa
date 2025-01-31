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
        "dob": "",
        "password": "Tokouni12345!",
        "email": ""
    },
    "expected_result": {
        "status_code": 422,
        "body": {
            "dob": [
              "The dob field must be a valid date.",
              "The dob field must match the format Y-m-d.",
              "Customer must be 18 years old.",
              "Customer must be younger than 75 years old."
            ]
          },
        "json_schema": {
           "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "dob"
    ],
    "properties": {
        "dob": {
            "type": "array",
            "default": [],
            "title": "The dob Schema",
            "items": {
                "type": "string",
                "title": "A Schema",
                "examples": [
                    "The dob field must be a valid date.",
                    "The dob field must match the format Y-m-d.",
                    "Customer must be 18 years old.",
                    "Customer must be younger than 75 years old."
                ]
            },
            "examples": [
                ["The dob field must be a valid date.",
                    "The dob field must match the format Y-m-d.",
                    "Customer must be 18 years old.",
                    "Customer must be younger than 75 years old."
                ]
            ]
        }
    },
    "examples": [{
        "dob": ["The dob field must be a valid date.",
            "The dob field must match the format Y-m-d.",
            "Customer must be 18 years old.",
            "Customer must be younger than 75 years old."
        ]
    }]
        }
    }
};

module.exports = test_data;
