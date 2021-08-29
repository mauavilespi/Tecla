//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? teclalopers model
const teclalopers = require('./db.models.teclalopers');

//? tecnologias model
const tecnologias = sequelize.define('tecnologias', {

    nodejs: {type: DataTypes.FLOAT, allowNull: false},

    frontend: {type: DataTypes.FLOAT, allowNull: false},

    swagger: {type: DataTypes.FLOAT, allowNull: false},

    javascript: {type: DataTypes.FLOAT, allowNull: false},

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

module.exports = tecnologias;