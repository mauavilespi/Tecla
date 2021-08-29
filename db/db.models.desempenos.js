//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? desempenos model
const desempenos = sequelize.define('desempenos', {

    calidadcodigo: {type: DataTypes.FLOAT, allowNull: false},

    velocidadentrega: {type: DataTypes.FLOAT, allowNull: false},

    performancecodigo: {type: DataTypes.FLOAT, allowNull: false}
    
}, {
    //* Desactivate CreatedAt | UpdatedAt
    timestamps: false
});

module.exports = desempenos;