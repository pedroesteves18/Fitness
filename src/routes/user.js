import Router from "router";

const router = Router()

router.get('/', (req,res)=>{
    res.status(200).send('ok')
})

export default router