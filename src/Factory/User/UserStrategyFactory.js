import UserCreatorFactory from "./UserCreatorFactory.js"

export default class StrategyFactory{

    static async userStrategyFactory(tipoFactory,tipoUsuario,data) {
        switch(tipoFactory){
            case 'usuario':
                let strategy = UserCreatorFactory.userCreatorFactory(tipoUsuario)
                return (await strategy).executar(data)
            default:
                throw new Error('Erro no Factory')
        }

    }
}