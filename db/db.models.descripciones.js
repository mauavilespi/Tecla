//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? descripciones model
const descripciones = sequelize.define('descripciones', {

    descripcion: {type: DataTypes.STRING, allowNull: true}

}, {
    //* Desactivate CreatedAt | UpdatedAt
    timestamps: false

});

//? Export module
module.exports = descripciones;