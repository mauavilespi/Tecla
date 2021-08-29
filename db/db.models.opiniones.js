//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? teclalopers model
const teclalopers = require('./db.models.teclalopers');

//? opiniones model
const opiniones = sequelize.define('opiniones', {

    calificacion: {type: DataTypes.FLOAT, allowNull: false},

    comentario: {type: DataTypes.STRING, allowNull: true},

    //* teclaloper
    teclaloperhaceopinion_id: {
        type: DataTypes.INTEGER,
        references: {model: teclalopers, key: 'id'},
        allowNull: false,
    },

    //* teclaloper
    teclaloperrecibeopinion_id: {
        type: DataTypes.INTEGER,
        references: {model: teclalopers, key: 'id'},
        allowNull: false,
    }

}, {
    //* CreatedAt | UpdatedAt
    timestamps: true
});

module.exports = opiniones;