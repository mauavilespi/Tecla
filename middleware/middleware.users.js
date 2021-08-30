//! Import the necessary modules
//? Controller Login
const controllerLogin = require('../app/controller/controller.login');


module.exports.verifyAdmin = async(req, res, next) => {
    try {
        if(req.headers.authorization != undefined){
            const token = req.headers.authorization.split(' ')[1];
            let verify = await controllerLogin.verifyTokenAdmin(token);
            if(verify){
                req.params.usuario = verify.data
                return next();
            } else {
                res.status(400).send({error: 'Usted no pertenece a los administradores'})
            }
        } else {
            res.status(400).send({error: 'Este es un sistema seguro y requiere autorización de administrador'})
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).send({error: 'Requiere autorización de administrador'});
    }

}