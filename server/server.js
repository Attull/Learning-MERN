import Express from "express"
import cors from 'cors'
import fsdRoute from "./Routes/fsdRoutes.js"
import productRoute from "./Routes/productRoutes.js"


const app =  Express()

app.use(cors())
app.use(Express.json())
// fsd routes
app.use("/fsdAPI",fsdRoute)

// product routes
app.use("/productAPI",productRoute)


app.listen(5000, ()=>{
    console.log("server start on PORT 5000")
})