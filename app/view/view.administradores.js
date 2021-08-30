//! Import the necessary modules
//? Controller administradores
const controllerAdministradores = require('../controller/controller.administradores');

module.exports = async(app) => {
    //? Create new administrador
    app.post('/administrador/create', async(req, res) => {
        let {correo, contrasena} = req.body;
        if(!correo || !contrasena) return res.status(400).send({error: 'Datos incompletos'})

        try {
            let verify = await controllerAdministradores.administradorExists(correo);
            if(verify) return res.status(400).send({error: 'Usuario ya registrado'})
            
            let result = await controllerAdministradores.administradorCreate(req.body);
            res.status(200).send({status: result})
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'});
        }
        
    });

    //? Get all administrador
    app.get('/administrador', async(req, res) => {
        try {
            let result = await controllerAdministradores.administradorGet();
            if(result) return res.status(200).send(result)
            res.status(400).send({error: 'No se han encontrado administradores'})
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'No se ha podido listar a los administradores'});
            
        }
    
    });
}