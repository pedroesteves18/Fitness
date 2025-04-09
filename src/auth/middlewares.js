import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export default {
    async setToken(usuario){
        try{
            let token = jwt.sign({id: usuario.id, admin: usuario.admin}, process.env.SECRET_KEY, {expiresIn: process.env.JWT_EXPIRATION})
            return token
        }catch(err){
            return {status:400,msg:`Erro na criação do token`}
        }
    }
}