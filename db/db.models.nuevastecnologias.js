//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? nuevastecnologias model
const nuevastecnologias = sequelize.define('nuevastecnologias', {

    nombre: {type: DataTypes.STRING, allowNull: false}

}, {
    //* Desactivate CreatedAt | UpdatedAt
    timestamps: false
});

module.exports = nuevastecnologias;