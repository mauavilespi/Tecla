//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? teclalopers model
const teclalopers = require('./db.models.teclalopers');

//? entornos model
const entornos = sequelize.define('entornos', {

    versionado: {type: DataTypes.FLOAT, allowNull: false},

    trellojira: {type: DataTypes.FLOAT, allowNull: false},

    slack: {type: DataTypes.FLOAT, allowNull: false},

    agiles: {type: DataTypes.FLOAT, allowNull: false},

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

module.exports = entornos;