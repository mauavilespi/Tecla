//! Import the necessary modules
//? JWT
const jwt = require('jsonwebtoken');

//? Dotenv
require('dotenv').config();

class modelLogin {
    
    constructor(data) {
        this.data = data;
    };

    static newToken = async(data, type) => {
        if(type === 1) return jwt.sign({data}, ''+process.env.SECRET_KEY_Adm)
        if(type === 2) return jwt.sign({data}, ''+process.env.SECRET_KEY_Tec)
        return 0
        //return jwt.sign({data}, ''+process.env.SECRET_KEY)
    };
};

module.exports = modelLogin;