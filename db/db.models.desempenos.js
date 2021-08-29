//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? teclalopers model
const teclalopers = require('./db.models.teclalopers');

//? desempenos model
const desempenos = sequelize.define('desempenos', {

    calidadcodigo: {type: DataTypes.FLOAT, allowNull: false},

    velocidadentrega: {type: DataTypes.FLOAT, allowNull: false},

    performancecodigo: {type: DataTypes.FLOAT, allowNull: false},

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

module.exports = desempenos;