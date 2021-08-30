//! Import the necessary modules
//? Controller teclalopers
const controllerTeclalopers = require('../controller/controller.teclalopers');

module.exports = async(app) => {
    //? Create new Teclaloper
    app.post('/teclaloper/create', middlewareUsers.verifyAdmin, async(req, res) => {
        let {nombre, apellido1, pais, ciudad, active, fechaNacimiento, correo, contrasena, administrador_id} = req.body;
        if(!nombre || !apellido1 || !pais || !ciudad || !active || !fechaNacimiento || !correo || !contrasena || !administrador_id) return res.status(400).send({error: 'Datos incompletos'})

        try {
            let verify = await controllerTeclalopers.teclaloperExistsCorreo(correo);
            if(verify) return res.status(400).send({error: 'Usuario ya registrado'})
            
            let result = await controllerTeclalopers.teclaloperCreate(req.body);
            res.status(200).send({status: result})
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'});
        }
        
    });

    //? Update Teclaloper
    app.put('/teclaloper/update/:id', async(req, res) => {
        let idTeclaloper = req.params.id;
        let {nombre, apellido1, pais, ciudad, fechaNacimiento, correo} = req.body;
        if(!nombre || !apellido1 || !pais || !ciudad || !fechaNacimiento || !correo) return res.status(400).send({error: 'Datos incompletos'});

        try {
            let verifyID = await controllerTeclalopers.teclaloperExistsID(idTeclaloper);
            if(!verifyID) return res.status(400).send({error: 'No se puede modificar un usuario que no existe'});

            let result = await controllerTeclalopers.teclaloperUpdate(req.body, idTeclaloper);
            res.status(200).send({status: result});

        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'});
        }

    });

    //? Delete Teclaloper
    app.delete('/teclaloper/delete/:id', middlewareUsers.verifyAdmin, async(req, res) => {
        let idTeclaloper = req.params.id;
        try {
            let verifyID = await controllerTeclalopers.teclaloperExistsID(idTeclaloper);
            if(!verifyID) if(!verifyID) return res.status(400).send({error: 'No se puede eliminar un usuario que no existe'});

            let result = await controllerTeclalopers.teclaloperDelete(idTeclaloper);
            res.status(200).send({status: result});
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'});
        }

    });

    //? Read Teclaloper
    app.get('/teclaloper', async(req, res) => {
        try {
            let result = await controllerTeclalopers.teclaloperGet();
            res.status(200).send(result);
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'});
        }
    })




}