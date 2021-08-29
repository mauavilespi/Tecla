//! Import the necessary modules
//? Administradores Model
const administradores = require('../../db/db.models.administradores');

//? BCRYPT
const bcrypt = require('bcrypt');


class modelAdministrador {
    constructor(data) {
        this.data = data;
    };

    static newAdministrador = async(data) => {
        try {
            //* Encrypt password
            data[1] = await bcrypt.hash(data[1], 10);

            let resultado = await administradores.create({correo: data[0], contrasena: data[1]});
            return resultado;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido crear el usuario');
        }
    };

    static verifyAdministrador = async(data) => {
        try {
            let result = await administradores.findOne({where: {correo: data}});
            return result;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido verificar la existencia del usuario');
            
        }
    };

    static getAdministrador = async(data) => {
        try {
            let result = await administradores.findAll({
                attributes: ['id','correo','createdAt','updatedAt']
            });
            return result;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido realizar la petición')
            
        }
    }
}

module.exports = modelAdministrador;