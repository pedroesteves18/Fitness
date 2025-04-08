import {DataTypes} from 'sequelize';
import sequelize from '../config/database.js'


const Refeicao = sequelize.define('Refeicao', {
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

export default Refeicao