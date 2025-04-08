import validator from 'validator'
import bcrypt from 'bcrypt'
import userFunctions from './userFunctions.js'

export default {
    verificaEmail(email){
        if(validator.isEmail(email)){
            return email
        } else {
            return {status:400, msg:'Email inválido'}
        }
    },

    verificaSenha(senha){
        const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(regex.test(senha)){
            return senha
        } else {
            return {status:400, msg:'Senha não atende requisitos'}
        }
    },

    verificaNome(nome){
        if(nome.length <= 2){
            return {status:400, msg:'Nome inválido'}
        } else {
            return nome
        }
    },

    async userRegisterReturn(usuario){
        let erros = []
        if((this.verificaNome(usuario.nome)).status === 400){
            erros.push('Nome inválido')
        }
        if((this.verificaSenha(usuario.senha)).status === 400){
            erros.push('Senha inválida')
        } 
        if((this.verificaEmail(usuario.email)).status === 400){
            erros.push('Email inválido')
        }

        if(erros.length === 0){
            return (await userFunctions.cadastrarUser(usuario))
        }

        let msg = ''

        for(const erro of erros){
            msg += `${erro}, `
        }
        return {status:400, msg: msg}
    }
}