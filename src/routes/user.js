import Router from "router";
import Factory from "../helpers/Factory/Factory.js";
import middlewares from "../auth/middlewares.js";

import AllUserFindStrategy from '../helpers/Factory/Strategies/UserFind/AllUserFindStrategy.js'
import UserStrategy from "../helpers/Factory/Strategies/UserStrategy.js";
const router = Router()

router.post('/cadastro', async (req,res)=>{
    try{

        let resposta = await Factory.factory('usuario','comum',req.body)
        return res.status(resposta.status).send({msg:resposta.msg})
    }catch(err){
        return res.status(500).send({msg:`Server-side error: ${err.message}`})
    }
})

router.get('/', middlewares.verifyToken,async (req,res) => {
    try{
        let users = await (new UserStrategy(new AllUserFindStrategy()).executar())
        res.status(200).send({users: users})
    }catch(err){
        res.status(500).send({msg:err.message})
    }
})



export default router