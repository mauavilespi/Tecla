//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? administradores model
const administradores = sequelize.define('administradores', {

    correo: {type: DataTypes.STRING, allowNull: false},

    contrasena: {type: DataTypes.STRING, allowNull: true}
}, {
    //* CreatedAt | UpdatedAt
    timestamps: true
});

module.exports = administradores;