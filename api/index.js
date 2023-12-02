import express from 'express'

const app = express()

app.listen(3000,()=>console.log("conncted to the port 3000"))

app.get('/test',(req,res)=>{
    res.status(200).json("everything is okay.")
})