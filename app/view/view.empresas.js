//! Import the necessary modules
//? Controller empresas
const controllerEmpresas = require('../controller/controller.empresas');
//? Middleware Users
const middlewareUsers = require('../../middleware/middleware.users');

module.exports = async(app) => {
    //? Create new Empresa
    app.post ('/empresa/create', async(req, res) => {
        let {nombre, contrasena, correo, active, accesototal} = req.body;
        if(!nombre || !contrasena || !correo || !active || !accesototal) return res.status(400).send({error : "Datos incompletos"});

        try {
            let verify = await controllerEmpresas.empresaExistsCorreo(correo);
            if(verify) return res.status(400).send({error : "Empresa ya registrada"});

            let result = await controllerEmpresas.empresaCreate(req.body);
            res.status(200).send({status: result});
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'});
        }
    });

    //? Update Empresa
    app.put('/empresa/update/:id', async(req, res) => {
        let idEmpresa = req.params.id;
        let {nombre, correo} = req.body;
        if(!nombre || !correo) return res.status(400).send({error: 'Datos incompletos'});

        try {
            let verifyID = await controllerEmpresas.empresaExistsID(idEmpresa);
            if(!verifyID) return res.status(400).send({error: 'No se puede modificar una empresa que no existe'});

            let result = await controllerEmpresas.empresaUpdate(req.body, idEmpresa);
            res.status(200).send({status: result});

        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'});
        }

    });

    //? Delete Empresa
    app.delete('/empresa/delete/:id', middlewareUsers.verifyAdmin, async(req, res) => {
        let idEmpresa = req.params.id;
        try {
            let verifyID = await controllerEmpresas.empresaExistsID(idEmpresa);
            if(!verifyID) return res.status(400).send({error: 'No se puede eliminar una empresa que no existe'});

            let result = await controllerEmpresas.empresaDelete(idEmpresa);
            res.status(200).send({status: result});
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'});
        }

    });

    //? Read Empresa
    app.get('/empresa', async(req, res) => {
        try {
            let result = await controllerEmpresas.empresaGet();
            if(result) return res.status(200).send(result)
            res.status(400).send({error: 'No se han encontrado administradores'})
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'});
        }
    })

}