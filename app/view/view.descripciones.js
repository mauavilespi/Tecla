//! Import the necessary modules
//? Controller descripciones
const controllerDescripciones = require ('../controller/controller.descripciones');
//? Controller teclalopers
const controllerTeclalopers = require('../controller/controller.teclalopers');
//? Middleware Users
const middlewareUsers = require('../../middleware/middleware.users');

module.exports = async(app) => {

    //? Create descripcion
    app.post('/descripcion/create', middlewareUsers.verifyAdmin, async(req,res) => {
        let {teclaloper_id} = req.body;
        if(!teclaloper_id) return res.status(400).send({error: 'Datos incompletos'});

        try {
            //* Verificar si no existe una descripción para el usuario
            let verifyDescripcionID = await controllerDescripciones.descripcionExistsID(teclaloper_id);
            if(verifyDescripcionID) return res.status(400).send({error: `El usuario con id ${teclaloper_id} ya tiene descripción`});

            //* Verificar si existe el usuario con ese ID
            let verifyID = await controllerTeclalopers.teclaloperExistsID(teclaloper_id);
            if(!verifyID) return res.status(400).send({error: 'No se puede crear descripción de un usuario que no existe'});

            let result = await controllerDescripciones.descripcionCreate(req.body);
            res.status(200).send({status:result});
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'});
        }

    });

    //? Update description
    app.put('/descripcion/update/:id', middlewareUsers.verifyAdmin, async(req, res) => {
        let idUser = req.params.id;
        try {
            //* Verificar si existe una descripción para el usuario
            let verifyDescripcionID = await controllerDescripciones.descripcionExistsID(idUser);
            if(!verifyDescripcionID) return res.status(400).send({error: `El usuario con id ${idUser} no tiene descripción`});

            let result = await controllerDescripciones.descripcionUpdate(req.body, idUser);
            res.status(200).send({status: result});
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'});
        }
    });

    //? Get description (by id)
    app.get('/descripcion/:id', async(req, res) => {
        let idUser = req.params.id;
        try {
            //* Verificar si existe una descripción para el usuario
            let verifyDescripcionID = await controllerDescripciones.descripcionExistsID(idUser);
            if(!verifyDescripcionID) return res.status(400).send({error: `El usuario con id ${idUser} no tiene descripción`});

            let result = await controllerDescripciones.descripcionGetId(idUser);
            res.status(200).send(result);
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'});
        }
    })

    
}