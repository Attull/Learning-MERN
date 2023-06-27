import { Router } from "express";

const route = Router()

route.get('/', (req, res)=>{
    res.send("Heyyyy Nodemon")
})

route.get('/students', (req, res)=>{
    res.json([
        {
            name:'Vishal',
            batch:19
        },
        {
            name:'Ahmad',
            batch:21
        },
        {
            name:'Mahesh',
            batch:22
        }
    ]
    )
})


export default route