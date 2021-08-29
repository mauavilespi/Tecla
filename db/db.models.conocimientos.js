//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? teclalopers model
const teclalopers = require('./db.models.teclalopers');

//? conocimientos model
const conocimientos = sequelize.define('conocimientos', {

    basededatos: {type: DataTypes.FLOAT, allowNull: false},

    apis: {type: DataTypes.FLOAT, allowNull: false},

    testing: {type: DataTypes.FLOAT, allowNull: false},

    seguridad: {type: DataTypes.FLOAT, allowNull: false},

    teoriaobjetos: {type: DataTypes.FLOAT, allowNull: false},

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

module.exports = conocimientos;