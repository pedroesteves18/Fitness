import User from "./User.js";

export default class UserBuilder extends User{
    constructor(){
        super()
        this.user = new User()
    }

    setNome(nome){
        this.user.nome = nome
        return this
    }

    setEmail(email){
        this.user.email = email
        return this
    }

    setAdmin(admin){
        this.user.admin = admin
        return this
    }

    setSenha(senha){
        this.user.senha = senha
        return this
    }

    setFoto(foto){
        this.user.foto = foto
        return this
    }

    build(){
        return this.user
    }
}