//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? empresas model
const empresas = sequelize.define('empresas', {

    nombre: {type: DataTypes.STRING, allowNull: false},

    acercademi: {type: DataTypes.STRING, allowNull: true},

    contrasena: {type: DataTypes.STRING, allowNull: false},

    correo: {type: DataTypes.STRING, allowNull: false},

    imagen: {type: DataTypes.STRING, allowNull: true},

    ceo: {type: DataTypes.STRING, allowNull: true}
}, {
    //* CreatedAt | UpdatedAt
    timestamps: true
});

module.exports = empresas;