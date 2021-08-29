//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? teclalopers model
const teclalopers = require('./db.models.teclalopers');

//? amigos model
const amigos = sequelize.define('amigos', {

    //* teclaloper
    teclaloper1_id: {
        type: DataTypes.INTEGER,
        references: {model: teclalopers, key: 'id'},
        allowNull: false,
    },

    //* teclaloper
    teclaloper2_id: {
        type: DataTypes.INTEGER,
        references: {model: teclalopers, key: 'id'},
        allowNull: false,
    }


}, {
    //* CreatedAt | UpdatedAt
    timestamps: true
});

module.exports = amigos;