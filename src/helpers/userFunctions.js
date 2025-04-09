import User from "../models/User.js"
import { Op } from "sequelize"
import bcrypt from 'bcrypt'
import Factory from "./Factory/Factory.js"

export default {
    async compararSenha(senha,hash){
        return await bcrypt.compare(senha,hash)
    },

    async setHash(senha){
        return await bcrypt.hash(senha,10)
    },

    async cadastrarUser(usuario){
        try{
            usuario.senha = await this.setHash(usuario.senha)

            return Factory.factory('usuario',usuario)
        }catch(err){
            return {status: 500, msg:'Erro no cadastro do Usuário no banco de dados'}
        }
    },

    async verificaUserCadastrados(usuario){
        try{
            let encontrado = await User.findOne({
                where: {email : usuario.email}
            })

            if(encontrado){
                return {status:400,msg:'Credenciais já utilizadas!'}
            }

            return null
        }catch(err){
            return {status: 500, msg:`Erro na procura do banco de dados! ${err.message}`}
        }
    }
}