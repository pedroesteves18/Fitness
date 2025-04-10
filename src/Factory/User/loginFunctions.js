
import bcrypt from "bcrypt"
import {Op} from 'sequelize'
import middlewares from "../../auth/middlewares.js";
import DefaultUserFindStrategy from './Strategies/UserFind/DefaultUserFindStrategy.js'
import UserStrategy from "./Strategies/UserStrategy.js";

export default {
    async setHash(senha){
        return await bcrypt.hash(senha,10)
    },
    async compararSenha(senha, hash){
        return await bcrypt.compare(senha,hash)
    },

    async procuraUserLogin(usuario){
        try{
            
            let userEncontrado = await (new UserStrategy(new DefaultUserFindStrategy())).executar(usuario.email)

            if(userEncontrado){
                let senhaCorreta = await this.compararSenha(usuario.senha, userEncontrado.senha)
                if(senhaCorreta){
                    let token
                    try{
                        token = middlewares.setToken(userEncontrado)
                    }catch(err){
                        return {status: token.status, msg:token.msg}
                    }
                    return {status: 200, msg:`Usuario encontrado!`, usuario: userEncontrado,token:token}
                }
                return {status: 401,msg:`Senha incorreta`}
            } 

            return {status: 400, msg:`Usuário não encontrado`}
        }catch(err){
            return {status: 500, msg:`Erro na procura do banco de dados! ${err.message}`}
        }
    }
}