//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? tecnologias model
const tecnologias = sequelize.define('tecnologias', {

    nodejs: {type: DataTypes.FLOAT, allowNull: false},

    frontend: {type: DataTypes.FLOAT, allowNull: false},

    swagger: {type: DataTypes.FLOAT, allowNull: false},

    javascript: {type: DataTypes.FLOAT, allowNull: false}
    
}, {
    //* Desactivate CreatedAt | UpdatedAt
    timestamps: false
});

module.exports = tecnologias;