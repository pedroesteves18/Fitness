import {DataTypes} from 'sequelize';
import sequelize from '../config/database.js'
import Desafio from './Desafio.js';
import User from './User.js';


const UserDesafio = sequelize.define('UserDesafio')

User.belongsToMany(Desafio, {through: UserDesafio,foreignKey: 'userId',otherKey: 'desafioId',as: 'desafios'});
  
Desafio.belongsToMany(User,{through: UserDesafio,foreignKey: 'desafioId',otherKey: 'userId',as: 'usuarios'});

export default UserDesafio  