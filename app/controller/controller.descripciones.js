//! Import the necessary modules
//? Model Descripciones
const modelDescripciones = require('../model/model.descripciones')

class controllerDescripciones{

    constructor(data) {
        this.data = data
    };

    static descripcionCreate = async(data) => {
        let newDescripcion = [
            data.descripcion,
            data.teclaloper_id
        ];

        try {
            let result = await modelDescripciones.newDescripciones(newDescripcion);
            if(result) return 'Se ha creado la descripción correctamente'
            else return 'Error en la creación de la descripción'
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido crear la descripción');
        }
    };

    static descripcionExistsID = async(data) => {
        let tmpID = data;
        try {
            let result = await modelDescripciones.verifyDescripcionesID(tmpID);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido verificar la existencia de la descripción');
            
        }
    };

    static descripcionUpdate = async(data, id) => {
        let updateDescripcion = [
            id,
            data.descripcion
        ];

        try {
            let result = await modelDescripciones.updateDescripciones(updateDescripcion);
            if(result) return 'Se ha actualizado la descripción'
            else return 'Error en la actualización de la descripción'
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido actualizar la descripción');
        }
    };

    static descripcionGetId = async(id) => {
        let tmpID = id;
        try {
            let result = await modelDescripciones.getDescripcionesID(tmpID);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido traer la descripción');
        }
    }

};

module.exports = controllerDescripciones;