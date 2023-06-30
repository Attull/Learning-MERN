import Express from "express"
import cors from 'cors'
import fsdRoute from "./Routes/fsdRoutes.js"
import productRoute from "./Routes/productRoutes.js"
import connect from "./Database/conn.js"
import {config} from "dotenv"

const app =  Express()

app.use(cors())

// fsd routes
app.use("/fsdAPI",fsdRoute)

// product routes
app.use("/productAPI",productRoute)


connect().then(()=>{
    try{
        app.listen(5000, ()=>{
            console.log("server start on PORT 5000")
        })
    }catch{
        throw err
    }

}).catch((err)=>{
    console.log(err)
})
