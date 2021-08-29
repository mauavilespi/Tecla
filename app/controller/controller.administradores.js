//! Import the necessary modules
//? Model Administradores
const modelAdministradores = require('../model/model.administradores')

class controllerAdministrador {
    constructor(data) {
        this.data = data
    };

    static administradorCreate = async(data) => {
        let newAdmin = [data.correo, data.contrasena];
        try {
            let result = await modelAdministradores.newAdministrador(newAdmin);
            if(result) return 'Se ha creado el usuario correctamente'
            else return 'Error en la creación de usuario'
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido crear el usuario');
        }
    };

    static administradorExists = async(data) => {
        let tmpAdmin = data;
        try {
            let result = await modelAdministradores.verifyAdministrador(tmpAdmin);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido verificar la existencia del usuario');
            
        }
    };

    static administradorGet = async() => {
        try {
            let result = await modelAdministradores.getAdministrador();
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido realizar la petición')
            
        }
    }

}

module.exports = controllerAdministrador;