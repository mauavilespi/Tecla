//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? idiomas model
const idiomas = sequelize.define('idiomas', {
}, {
    //* Desactivate CreatedAt | UpdatedAt
    timestamps: false
});

module.exports = idiomas;