//! Import the necessary modules
//? Teclalopers Model
const teclalopers = require('../../db/db.models.teclalopers');

//? BCRYPT
const bcrypt = require('bcrypt');


class modelTeclaloper {
    constructor(data) {
        this.data = data;
    };

    static verifyTeclaloperCorreo = async(data) => {
        try {
            let result = await teclalopers.findOne({where: {correo: data}});
            return result;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido verificar la existencia del usuario');
            
        }
    };

    static verifyTeclaloperID = async(data) => {
        try {
            let result = await teclalopers.findOne({where: {id: data}});
            return result;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido verificar la existencia del usuario');
            
        }
    };

    static newTeclaloper = async(data) => {
        try {
            //* Encrypt password
            data[12] = await bcrypt.hash(data[12], 10);

            let resultado = await teclalopers.create({
                nombre: data[0],
                apellido1: data[1],
                apellido2: data[2],
                foto: data[3],
                acercademi: data[4],
                pais: data[5],
                ciudad: data[6],
                active: data[7],
                fechaNacimiento: data[8],
                linkedin: data[9],
                telefono: data[10],
                correo: data[11],
                contrasena: data[12],
                administrador_id: data[13]
            });
            return resultado;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido crear el usuario');
        }
    };

    static updateTeclaloper = async(data) => {
        try {
            let resultado = await teclalopers.update({
                nombre: data[1],
                apellido1: data[2],
                apellido2: data[3],
                foto: data[4],
                acercademi: data[5],
                pais: data[6],
                ciudad: data[7],
                fechaNacimiento: data[8],
                linkedin: data[9],
                telefono: data[10],
                correo: data[11],
            },{
                where: {
                    id: data[0]
                }
            });
            return resultado;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido actualizar el usuario');
        }
    };

    static deleteTeclaloper = async(data) => {
        try {
            let result = await teclalopers.update({active:0},{
                where: {
                    id: data
                }
            });
            return result;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido eliminar el usuario');
        }
    };

    static getTeclaloper = async(data) => {
        try {
            let result = await teclalopers.findAll({
                where: {
                    active: 1
                },
                attributes: ['id','nombre','apellido1','apellido2','foto','acercademi','pais','ciudad','fechaNacimiento','linkedin','telefono','correo']
            });
            return result;

        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido listar a los usuarios');
        }
    }
};

module.exports = modelTeclaloper;