//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? amigos model
const amigos = sequelize.define('amigos', {


}, {
    //* CreatedAt | UpdatedAt
    timestamps: true
});

module.exports = amigos;