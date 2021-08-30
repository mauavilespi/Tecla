//! Import the necessary modules
//? Empresas Model
const empresas = require('../../db/db.models.empresas');
//? BCRYPT
const bcrypt = require('bcrypt');

class modelEmpresa {
    constructor(data) {
        this.data = data;
    };

    static verifyEmpresaCorreo = async(data) => {
        try {
            let result = await empresas.findOne({where: {correo: data}});
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido verificar la existencia de la empresa');
        }
    };

    static newEmpresa = async(data) => {
        try {
            //* Encrypt password
            data[2] = await bcrypt.hash(data[2], 10);

            let resultado = await empresas.create({
                nombre: data[0],
                acercademi: data[1],
                contrasena: data[2],
                correo: data[3],
                imagen: data[4],
                ceo: data[5],
                active: data[6],
                accesototal: data[7],
            });
            return resultado;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido crear la empresa');
        }
    };

    static verifyEmpresaID = async(data) => {
        try {
            let result = await empresas.findOne({where: {id: data}});
            return result;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido verificar la existencia de la empresa');
            
        }
    };

    static updateEmpresa = async(data) => {
        try {
            let resultado = await empresas.update({
                nombre: data[1],
                acercademi: data[2],
                correo: data[3],
                imagen: data[4],
                ceo: data[5],
            },{
                where: {
                    id: data[0]
                }
            });
            return resultado;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido actualizar la empresa');
        }
    };

    static deleteEmpresa = async(data) => {
        try {
            let result = await empresas.update({active:0},{
                where: {
                    id: data
                }
            });
            return result;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido eliminar la empresa');
        }
    };

    static getEmpresa = async() => {
        try {
            let result = await empresas.findAll({
                where: {
                    active: 1
                },
                attributes: ['id','nombre','acercademi','correo','imagen','ceo','accesototal']
            });
            return result;

        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido listar a las empresas');
        }
    };

};

module.exports = modelEmpresa;