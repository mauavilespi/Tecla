//! Import the necessary modules
//? Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./db.connection');

//? empresas model
const empresas = require('./db.models.empresas');

//? publicaciones model
const publicaciones = sequelize.define('publicaciones', {
    
    descripcion: {type: DataTypes.STRING, allowNull: false},

    imagen: {type: DataTypes.STRING, allowNull: true},

    //* empresas
    empresa_id: {
        type: DataTypes.INTEGER,
        references: {model: empresas, key: 'id'},
        allowNull: false,
    }
}, {
    //* CreatedAt | UpdatedAt
    timestamps: true
});

module.exports = publicaciones;