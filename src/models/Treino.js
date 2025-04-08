import {DataTypes} from 'sequelize';
import sequelize from '../config/database.js'


const Treino = sequelize.define('Treino', {
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
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Treino