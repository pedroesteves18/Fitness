import Router from "router";
import Factory from "../helpers/Factory/Factory.js";
import userHelper from "../helpers/userHelper.js";
const router = Router()

router.post('/cadastro', async (req,res)=>{
    try{

        let resposta = await Factory.factory('usuario','comum',req.body)
        return res.status(resposta.status).send({msg:resposta.msg})
    }catch(err){
        return res.status(500).send({msg:`Server-side error: ${err.message}`})
    }
})



export default router