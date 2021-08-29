//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? teclalopers model
const teclalopers = require('./db.models.teclalopers');

//? nivelidioma model
const nivelidioma = require('./db.models.nivelidioma');

//? nombreidioma model
const nombreidioma = require('./db.models.nombreidioma')

//? idiomas model
const idiomas = sequelize.define('idiomas', {

    //* teclaloper
    teclaloper_id: {
        type: DataTypes.INTEGER,
        references: {model: teclalopers, key: 'id'},
        allowNull: false
    },

    //* nivelidioma
    nivelidioma_id: {
        type: DataTypes.INTEGER,
        references: {model: nivelidioma, key: 'id'},
        allowNull: false
    },

    //* nombreidioma
    nombreidioma_id: {
        type: DataTypes.INTEGER,
        references: {model: nombreidioma, key: 'id'},
        allowNull: false
    }

}, {
    //* Desactivate CreatedAt | UpdatedAt
    timestamps: false
});

module.exports = idiomas;