import Router from "router";
import loginHelper from "../Factory/User/loginHelper.js";
const router = Router()

router.post('/', async (req,res) => {
    try{
        let resposta = await loginHelper.userLoginReturn(req.body)
        res.cookie('token', resposta.token,{
            httpOnly: true,
            secure: true,
            maxAge: 15*60*1000
        })
        res.status(resposta.status).send({msg:resposta.msg, usuario: resposta.usuario, token: resposta.token})
    }catch(err){
        return res.status(500).send({msg:`Server-side error: ${err.message}`})
    }
})

export default router