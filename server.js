import express from 'express';
import router from './router.js';
import cors from 'cors';
import dotenv from 'dotenv'
import connection from './connection.js'
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json({limit:"20mb"}));
app.use("/eco",router); 
connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server started at ",process.env.PORT);
    })
})
.catch((error)=>{
    console.log(error);
})
 