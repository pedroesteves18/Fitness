import UserBuilder from "../../models/Builder/UserBuilder.js"

export default class BuilderFactory{

    static builderFactory(tipo){
        switch(tipo){
            case 'usuario':
                return new UserBuilder()
            default:
                throw new Error('Error no BuilderFactory')
        }
    }
}