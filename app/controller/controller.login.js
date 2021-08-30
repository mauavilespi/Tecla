//! Import the necessary modules
//? Model Login
const modelLogin = require('../model/model.login');
//? Model Administrador
const modelAdministrador = require('../model/model.administradores');
//? Model Teclaloper
const modelTeclaloper = require('../model/model.teclalopers');

class controllerLogin {

    constructor(data) {
        this.data = data
    };

    static generateToken = async(data, type) => {
        let tmpCorreo = [data.correo];
        let result = await modelLogin.newToken(tmpCorreo, type);
        return result
    };

    //? Know if user is admin, teclaloper or empresa
    static typeUser = async(data) => {
        let tmpUser = [data.correo, data.contrasena]
        let result = await modelTeclaloper.loginTeclaloper(tmpUser);
        if(result === 0) result = await modelAdministrador.loginAdministrador(tmpUser);
        
        return result; //* 1. administrador, 2. teclaloper, 3. empresa
    }

}

module.exports = controllerLogin;