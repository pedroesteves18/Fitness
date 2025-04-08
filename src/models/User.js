import {DataTypes} from 'sequelize';
import sequelize from '../config/database.js'
import Treino from './Treino.js';
import Refeicao from './Refeicao.js';



const User = sequelize.define('User', {
    nome: {
        type: DataTypes.STRING,
        allownull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    foto: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    }
})

User.hasMany(Treino, {foreignKey: 'userId', as: 'treinos'})
Treino.belongsTo(User, {foreignKey: 'userId', as: 'usuarioTreino', onDelete: 'CASCADE'})

User.hasMany(Refeicao, {foreignKey: 'userId', as: 'refeicoes'})
Refeicao.belongsTo(User, {foreignKey: 'userId', as: 'usuarioRefeicao', onDelete: 'CASCADE'})

export default User