import express from 'express'
import database from './src/config/database.js'

import user from './src/routes/user.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/user',user)



app.listen(3000, () =>{
    console.log('rodando')
})

export default app