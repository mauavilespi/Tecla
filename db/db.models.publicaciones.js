//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? publicaciones model
const publicaciones = sequelize.define('publicaciones', {
    
    descripcion: {type: DataTypes.STRING, allowNull: false},

    imagen: {type: DataTypes.STRING, allowNull: true}
}, {
    //* CreatedAt | UpdatedAt
    timestamps: true
});

module.exports = publicaciones;