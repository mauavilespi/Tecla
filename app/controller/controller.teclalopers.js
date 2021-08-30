//! Import the necessary modules
//? Model Teclalopers
const modelTeclalopers = require('../model/model.teclalopers')

class controllerTeclaloper {
    constructor(data) {
        this.data = data
    };

    static teclaloperExistsCorreo = async(data) => {
        let tmpTecla = data;
        try {
            let result = await modelTeclalopers.verifyTeclaloperCorreo(tmpTecla);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido verificar la existencia del usuario');
            
        }
    };

    static teclaloperExistsID = async(data) => {
        let tmpTecla = data;
        try {
            let result = await modelTeclalopers.verifyTeclaloperID(tmpTecla);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido verificar la existencia del usuario');
            
        }
    };

    static teclaloperCreate = async(data) => {
        let newTecla = [
            data.nombre,
            data.apellido1,
            data.apellido2,
            data.foto,
            data.acercademi,
            data.pais,
            data.ciudad,
            data.active,
            data.fechaNacimiento,
            data.linkedin,
            data.telefono,
            data.correo,
            data.contrasena,
            data.administrador_id
        ];
        try {
            let result = await modelTeclalopers.newTeclaloper(newTecla);
            if(result) return 'Se ha creado el usuario correctamente'
            else return 'Error en la creación de usuario'
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido crear el usuario');
        }
    };

    static teclaloperUpdate = async(data, id) => {
        let updateTecla = [
            id,
            data.nombre,
            data.apellido1,
            data.apellido2,
            data.foto,
            data.acercademi,
            data.pais,
            data.ciudad,
            data.fechaNacimiento,
            data.linkedin,
            data.telefono,
            data.correo,
        ];
        try {
            let result = await modelTeclalopers.updateTeclaloper(updateTecla);
            if(result) return 'Se ha actualizado el usuario correctamente'
            else return 'Error en la actualización de usuario'
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido actualizar el usuario');
        }
    };

    static teclaloperDelete = async(data) => {
        try {
            let result = await modelTeclalopers.deleteTeclaloper(data);
            if(result) return `El usuario con id ${data} ha sido eliminado`
            else return 'Error en la eliminación de usuario'
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido eliminar el usuario');
        }
    };

    static teclaloperGet = async() => {
        try {
            let result = await modelTeclalopers.getTeclaloper();
            return result;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido listar a los usuarios');
        }
    };

};

module.exports = controllerTeclaloper;
