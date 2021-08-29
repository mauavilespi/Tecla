//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? teclalopers model
const teclalopers = require('./db.models.teclalopers');

//? blandas model
const blandas = sequelize.define('blandas', {

    enfocado: {type: DataTypes.FLOAT, allowNull: false},

    trabajoequipo: {type: DataTypes.FLOAT, allowNull: false},

    comprometido: {type: DataTypes.FLOAT, allowNull: false},

    comunicacion: {type: DataTypes.FLOAT, allowNull: false},

    capacidadaprendizaje: {type: DataTypes.FLOAT, allowNull: false},

    resolucionproblemas: {type: DataTypes.FLOAT, allowNull: false},

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

module.exports = blandas;