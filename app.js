//! Import the necessary modules
//? Express
const express = require('express');
const app = express();

//? Sequelize
const sequelize = require('./db/db.connection');

//? Dotenv
require('dotenv').config();

//? CORS
const cors = require('cors');

//? Routes
const templates = require('./app/view/view.templates');
const administradores = require('./app/view/view.administradores');
const teclalopers = require('./app/view/view.teclalopers');
const descripciones = require('./app/view/view.descripciones');

//? Models DB
const teclalopersDB = require('./db/db.models.teclalopers');
const descripcionesDB = require('./db/db.models.descripciones');
const estudiosDB = require('./db/db.models.estudios');
const nivelidiomaDB = require('./db/db.models.nivelidioma');
const idiomasDB = require('./db/db.models.idiomas');
const nombreidiomaDB = require('./db/db.models.nombreidioma');
const nuevastecnologiasDB = require('./db/db.models.nuevastecnologias');
const conocimientosDB = require('./db/db.models.conocimientos');
const tecnologiasDB = require('./db/db.models.tecnologias');
const desempenosDB = require('./db/db.models.desempenos');
const blandasDB = require('./db/db.models.blandas');
const entornosDB = require('./db/db.models.entornos');
const amigosDB = require('./db/db.models.amigos');
const opinionesDB = require('./db/db.models.opiniones');
const empresasDB = require('./db/db.models.empresas');
const publicacionesDB = require('./db/db.models.publicaciones');
const administradoresDB = require('./db/db.models.administradores');

//? Middlewares
const middlewareGlobal = require('./middleware/middleware.global');

//! Global configs for use of ejs
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.set('views', __dirname + '/views');

//! Global middlewares
app.use(express.json());
app.use(cors());
app.use(middlewareGlobal.limiter);

//! Server start
const startServer = async() => {
    try {

        //* Connection with database
        await teclalopersDB.sync({alter:true});
        await descripcionesDB.sync({alter:true});
        await estudiosDB.sync({alter:true});
        await nivelidiomaDB.sync({alter:true});
        await idiomasDB.sync({alter:true});
        await nombreidiomaDB.sync({alter:true});
        await nuevastecnologiasDB.sync({alter:true});
        await conocimientosDB.sync({alter:true});
        await tecnologiasDB.sync({alter:true});
        await desempenosDB.sync({alter:true});
        await blandasDB.sync({alter:true});
        await entornosDB.sync({alter:true});
        await amigosDB.sync({alter:true});
        await opinionesDB.sync({alter:true});
        await empresasDB.sync({alter:true});
        await publicacionesDB.sync({alter:true});
        await administradoresDB.sync({alter:true});

        await sequelize.authenticate();
        console.log('Conexión con la base de datos establecida correctamente');

        //* Start server
        app.listen(process.env.PORT, () => {
            console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        })

    } catch (error) {
        console.error('Ocurrió un error al intentar conectar el servidor: \n', error)
    }
}

//! Call startServer
startServer();
templates(app);
administradores(app);
teclalopers(app);
descripciones(app);