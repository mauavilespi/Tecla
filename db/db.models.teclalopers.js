//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? teclalopers model
const teclalopers = sequelize.define('teclalopers', {

    nombre: {type: DataTypes.STRING(20), allowNull: false},

    apellido1: {type: DataTypes.STRING(20), allowNull: false},

    apellido2: {type: DataTypes.STRING(20), allowNull: true},

    foto: {type: DataTypes.STRING, allowNull: true},

    acercademi: {type: DataTypes.STRING, allowNull: true},

    pais: {type: DataTypes.STRING(20), allowNull: false},

    ciudad: {type: DataTypes.STRING(20), allowNull: false},

    active: {type: DataTypes.INTEGER, allowNull: false},
    
    fechaNacimiento: {type: DataTypes.DATEONLY, allowNull: false},

    linkedin: {type: DataTypes.STRING, allowNull: true},

    telefono: {type: DataTypes.BIGINT, allowNull: true},

    correo: {type: DataTypes.STRING, allowNull: false},

    contrasena: {type: DataTypes.STRING, allowNull: false}

}, {
    //* CreatedAt | UpdatedAt
    timestamps: true

});

//? Export module
module.exports = teclalopers;