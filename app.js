import express from 'express'
import database from './src/config/database.js'
import cookieParser from 'cookie-parser'
import user from './src/routes/user.js'
import login from './src/routes/login.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use('/user',user)
app.use('/login', login)


app.listen(3000, () =>{
    console.log('rodando')
})

export default app