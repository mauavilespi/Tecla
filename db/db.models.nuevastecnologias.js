//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? teclalopers model
const teclalopers = require('./db.models.teclalopers');

//? nuevastecnologias model
const nuevastecnologias = sequelize.define('nuevastecnologias', {

    nombre: {type: DataTypes.STRING, allowNull: false},

    //* teclaloper
    teclaloper_id: {
        type: DataTypes.INTEGER,
        references: {model: teclalopers, key: 'id'},
        allowNull: false,
    }

}, {
    //* Desactivate CreatedAt | UpdatedAt
    timestamps: false
});

module.exports = nuevastecnologias;