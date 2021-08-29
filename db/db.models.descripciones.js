//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? teclalopers model
const teclalopers = require('./db.models.teclalopers');

//? descripciones model
const descripciones = sequelize.define('descripciones', {

    descripcion: {type: DataTypes.STRING, allowNull: true},

    //* teclaloper
    teclaloper_id: {
        type: DataTypes.INTEGER,
        references: {model: teclalopers, key: 'id'},
        allowNull: false,
        unique: true
    }

}, {
    //* Desactivate CreatedAt | UpdatedAt
    timestamps: false

});

//? Export module
module.exports = descripciones;