import {DataTypes} from 'sequelize';
import sequelize from '../config/database.js'


const Desafio = sequelize.define('Desafio', {
    nome: {
        type: DataTypes.STRING,
        allownull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    foto: {
        type: DataTypes.BLOB('long'),
        allowNull: false
    },
    dataInicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dataFim: {
        type: DataTypes.DATE,
        allowNull: true
    },
})

export default Desafio