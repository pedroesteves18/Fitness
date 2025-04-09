import loginFunctions from "./loginFunctions.js"


export default {
    verificaEmail(email){
        if(!email || email.length === 0 || email === undefined){
            return {status:400, msg:'Insira o email'}
        }
        return email
    },

    verificaSenha(senha){
        if(!senha || senha.length === 0 || senha === undefined){
            return {status:400, msg:'Insira a senha'}
        }
        return senha
    },

    async userLoginReturn(usuario){

        let erros = []
        if((this.verificaEmail(usuario.email)).status === 400){
            erros.push('Insira o email, ')
        }
        if((this.verificaSenha(usuario.senha)).status === 400){
            erros.push('Insira a senha')
        }

        if(erros.length === 0){
            return loginFunctions.procuraUserLogin(usuario)
        }
        console.log(erros)
        let msg = ''
        for(const erro of erros){
            msg += erro
        }

        return {status:400, msg: msg }
    }
}