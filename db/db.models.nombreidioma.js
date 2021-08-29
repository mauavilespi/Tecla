//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? nombreidioma model
const nombreidioma = sequelize.define('nombreidioma', {

    nombre: {type: DataTypes.STRING, allowNull: false}
}, {
    //* Desactivate CreatedAt | UpdatedAt
    timestamps: false
});

module.exports = nombreidioma;