import UserStrategy from './Strategies/UserStrategy.js'
import DefaultUserCreationStrategy from './Strategies/UserCreator/DefaultUserCreationStrategy.js'

export default class UserCreatorFactory{

    static async userCreatorFactory(tipoUsuario) {
        switch(tipoUsuario){
            case 'comum':
                return new UserStrategy(new DefaultUserCreationStrategy())
            default:
                throw new Error('Erro no Factory')
        }

    }
}