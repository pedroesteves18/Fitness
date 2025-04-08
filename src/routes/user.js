import Router from "router";
import userHelper from "../helpers/userHelper.js";
const router = Router()

router.post('/cadastro', async (req,res)=>{
    try{

        let resposta = await userHelper.userRegisterReturn(req.body)
        return res.status(resposta.status).send({msg:resposta.msg})
    }catch(err){
        return res.status(500).send({msg:`Server-side error: ${err.message}`})
    }
})

export default router