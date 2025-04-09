import Router from "router";
import loginHelper from "../helpers/loginHelper.js";
const router = Router()

router.post('/', async (req,res) => {
    try{
        let resposta = await loginHelper.userLoginReturn(req.body)
        res.cookie('token', resposta.jwt,{
            httpOnly: true,
            secure: true,
            maxAge: 15*60*1000
        })
        res.status(resposta.status).send({msg:resposta.msg, usuario: resposta.usuario})
    }catch(err){
        return res.status(500).send({msg:`Server-side error: ${err.message}`})
    }
})

export default router