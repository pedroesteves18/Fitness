import BuilderFactory from "./BuilderFactory.js"
import User from "../../models/User.js"
import userFunctions from '../userFunctions.js'
import UserStrategyFactory from './UserStrategyFactory.js'

export default class Factory{

    static async factory(tipo,subtipo,obj) {
        switch(tipo){
            case 'usuario':
                let builder = BuilderFactory.builderFactory('usuario')
                obj.senha = await userFunctions.setHash(obj.senha)
                let usuarioBuilder = builder.setAdmin(obj.admin).setEmail(obj.email).setFoto(obj.foto).setNome(obj.nome).setSenha(obj.senha).build();
    
                let credenciaisUtilizadas = await userFunctions.verificaUserCadastrados(usuarioBuilder)
                if(credenciaisUtilizadas){
                    return credenciaisUtilizadas
                }
                let usuarioCriado = await UserStrategyFactory.userStrategyFactory('usuario',subtipo,usuarioBuilder)

                if(usuarioCriado){
                    return {status: 200, msg:'Usuário Cadastrado'}
                }
    
                return {status: 400, msg:'Erro no cadastro do Usuário no banco de dados'}
            default:
                throw new Error('Erro no Factory')
        }

    }
}