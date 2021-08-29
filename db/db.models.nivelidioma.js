//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? nivelidioma model
const nivelidioma = sequelize.define('nivelidioma', {

    nombre: {type: DataTypes.STRING, allowNull: false}
    
}, {
    //* Desactivate CreatedAt | UpdatedAt
    timestamps: false
});

module.exports = nivelidioma;