import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()



    function setToken(usuario){
        try{
            return jwt.sign({id: usuario.id, admin: usuario.admin}, process.env.SECRET_KEY, {expiresIn: process.env.JWT_EXPIRATION})

        }catch(err){
            return {status:400,msg:`Erro na criação do token`}
        }
    }

    function verifyToken(req,res,next){
        try{
            let token = req.cookies.token
            if(!token || token === null || token === undefined){
                return res.status(402).send({msg:"Usuário não autenticado"})
            }
            jwt.verify(token, process.env.SECRET_KEY, (err,decoded) =>{
                if(err){
                    return res.status(401).send({msg:'Token inválido'})
                }
                req.userId = decoded.id
                req.admin = decoded.admin
                let novoToken = setToken({id: decoded.id,admin: decoded.admin})

                res.cookie('token',novoToken,{
                    httpOnly: true,
                    secure: true,
                    maxAge: 15*60*1000
                })

                next()
            })
        }catch(err){
            res.status(404).send({msg:err.message})
        }
    }

    export default {setToken,verifyToken}