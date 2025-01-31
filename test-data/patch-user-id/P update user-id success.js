const path = require('path');
const scriptName = path.basename(__filename);

const test_data = {
    "title": scriptName,
    "user_id": "",
    
   
    "header": {
        "accept": "application/json",
        "Authorization": `Bearer ${__TOKEN__}`
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
        //"password": "Tokouni12345!",
        //"email": "Balini210@gmail.com"
    },
    "expected_result": {
        "status_code": 200,
        "body": {
            "success": true
        },
        "json_schema": {
            "type": "object",
            "required": ["success"],
            "properties": {
                "success": {
                    "type": "boolean",
                    "examples": [true]
                }
            },
            "examples": [
                {
                    "success": true
                }
            ]
        }
    }
};

module.exports = test_data;