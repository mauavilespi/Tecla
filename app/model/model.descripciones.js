//! Import the necessary modules
//? Descripciones Model
const descripciones = require('../../db/db.models.descripciones');

class modelDescripciones {
    
    constructor(data) {
        this.data = data;
    };

    static newDescripciones = async(data) => {
        try {
            let result = await descripciones.create({
                descripcion: data[0],
                teclaloper_id: data[1]
            });
            return result;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido crear la descripción');
        }
    };

    static verifyDescripcionesID = async(data) => {
        try {
            let result = await descripciones.findOne({where: {teclaloper_id: data}});
            return result;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido verificar la existencia de la descripción');
            
        }
    };

    static updateDescripciones = async (data) => {
        try {
            let result = await descripciones.update({
                descripcion: data[1]
            },{
                where: {
                    teclaloper_id: data[0]
                }
            });

            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido actualizar la descripción');
        }
    };

    static getDescripcionesID = async(data) => {
        try {
            let result = await descripciones.findOne({
                where: {
                    teclaloper_id: data
                }
            });
            return result;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido traer la descripción');
        }
    }
};

module.exports = modelDescripciones;