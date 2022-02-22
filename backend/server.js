import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import AuthRoutes from './router/AuthRoutes.js'
//import bodyParser from "body-parser";

dotenv.config()

connectDB()


const app =express()
app.get('/', (req,res)=>{
    res.send("hey")
})
app.use(express.json())

app.use('/signin',AuthRoutes )


const PORT = process.env.PORT || 5000
app.listen( PORT ,console.log(`mother fucking Server is Ready !! ${PORT}`))