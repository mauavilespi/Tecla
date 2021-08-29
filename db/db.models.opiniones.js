//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? opiniones model
const opiniones = sequelize.define('opiniones', {

    calificacion: {type: DataTypes.FLOAT, allowNull: false},

    comentario: {type: DataTypes.STRING, allowNull: true}
}, {
    //* CreatedAt | UpdatedAt
    timestamps: true
});

module.exports = opiniones;