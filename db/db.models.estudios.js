//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? estudios model
const estudios = sequelize.define('estudios', {

    nombre: {type: DataTypes.STRING, allowNull: false},

    lugar: {type: DataTypes.STRING, allowNull: false}

}, {
    //* Desactivate CreatedAt | UpdatedAt
    timestamps: false

});

module.exports = estudios;