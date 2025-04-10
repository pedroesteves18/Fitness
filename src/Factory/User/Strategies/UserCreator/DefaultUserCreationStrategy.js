import User from "../../../../models/User.js"
import UserCreationStrategy from './UserCreationStrategy.js'

export default class DefaultUserCreationStrategy extends UserCreationStrategy{
    async executar(usuarioBuilder){
        return await User.create({
            nome: usuarioBuilder.nome,
            senha: usuarioBuilder.senha,
            email: usuarioBuilder.email,
            foto: usuarioBuilder.foto,
            admin: false
        })
    }
}