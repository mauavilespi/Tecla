//! Import the necessary modules
//? Model Empresas
const modelEmpresas = require('../model/model.empresas');

class controllerEmpresa {
    constructor(data) {
        this.data = data;

    };

    static empresaExistsCorreo = async(data) => {
        let tmpEmpresa = data;
        try {
            let result = await modelEmpresas.verifyEmpresaCorreo(tmpEmpresa);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido verificar la existencia de la empresa');
        }
    };

    static empresaCreate = async(data) => {
        let newEmpresas = [
            data.nombre,
            data.acercademi,
            data.contrasena,
            data.correo,
            data.imagen,
            data.ceo,
            data.active,
            data.accesototal,
        ];
        try {
            let result = await modelEmpresas.newEmpresa(newEmpresas);
            if(result) return 'Se ha creado la empresa correctamente'
            else return 'Error en la creación de empresa'
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido crear la empresa');
        }
    };

    static empresaExistsID = async(data) => {
        let tmpEmpresa = data;
        try {
            let result = await modelEmpresas.verifyEmpresaID(tmpEmpresa);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido verificar la existencia de la empresa');
        }
    };

    static empresaUpdate = async(data, id) => {
        let updateEmpresa= [
            id,
            data.nombre,
            data.acercademi,
            data.correo,
            data.imagen,
            data.ceo,
        ];
        try {
            let result = await modelEmpresas.updateEmpresa(updateEmpresa);
            if(result) return 'Se ha actualizado la empresa correctamente'
            else return 'Error en la actualización de empresa'
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido actualizar la empresa');
        }
    };

    static empresaDelete = async(data) => {
        try {
            let result = await modelEmpresas.deleteEmpresa(data);
            if(result) return `La empresa con id ${data} ha sido eliminado`
            else return 'Error en la eliminación de empresa'
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido eliminar la empresa');
        }
    };

    static empresaGet = async() => {
        try {
            let result = await modelEmpresas.getEmpresa();
            return result;
            
        } catch (error) {
            console.log(error);
            throw new Error ('No se ha podido listar a las empresas');
        }
    };

}

module.exports = controllerEmpresa;