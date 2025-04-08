import express from 'express'
import database from './src/config/database.js'
import User from './src/models/User.js'
import user from './src/routes/user.js'

const app = express()

app.use('/',user)



app.listen(3000, () =>{
    console.log('rodando')
})