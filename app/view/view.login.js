//! Import the necessary modules
//? Controller token
const controllerLogin = require('../controller/controller.login');

module.exports = async(app) => {
    //? LOGIN
    app.post('/login', async(req, res) => {
        let {correo, contrasena} = req.body;
        if(!correo || !contrasena) return res.status(400).send({error: 'Datos incompletos'})

        try {
            let result = await controllerLogin.typeUser(req.body);
            let token = await controllerLogin.generateToken(req.body, result)
            if(token === 0) return res.status(401).send({error: "Usted no es usuario de esta red"})
            res.status(200).send({"token": token, "type": result});
            
        } catch (error) {
            console.log(error);
            res.status(400).send({error: 'Ha ocurrido un error inesperado'});
        }
    });
}