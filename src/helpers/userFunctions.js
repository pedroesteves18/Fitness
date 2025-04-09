import User from "../models/User.js"
import { Op } from "sequelize"
import bcrypt from 'bcrypt'

export default {
    async compararSenha(senha,hash){
        return await bcrypt.compare(senha,hash)
    },

    async setHash(senha){
        return await bcrypt.hash(senha,10)
    },

    async cadastrarUser(usuario){
        try{
            let credenciaisUtilizadas = await this.verificaUserCadastrados(usuario)
            if(credenciaisUtilizadas){
                return credenciaisUtilizadas
            }
            usuario.senha = await this.setHash(usuario.senha)
            console.log(usuario.senha)
            let usuarioCriado = User.create({
                nome: usuario.nome,
                senha: usuario.senha,
                email: usuario.email,
                foto: usuario.foto
            })
            if(usuarioCriado){
                return {status: 200, msg:'Usuário Cadastrado'}
            }

            return {status: 400, msg:'Erro no cadastro do Usuário no banco de dados'}
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