//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? entornos model
const entornos = sequelize.define('entornos', {

    versionado: {type: DataTypes.FLOAT, allowNull: false},

    trellojira: {type: DataTypes.FLOAT, allowNull: false},

    slack: {type: DataTypes.FLOAT, allowNull: false},

    agiles: {type: DataTypes.FLOAT, allowNull: false}

}, {
    //* Desactivate CreatedAt | UpdatedAt
    timestamps: false
});

module.exports = entornos;