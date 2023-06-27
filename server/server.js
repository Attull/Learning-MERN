import Express from "express"

const app =  Express()


app.get('/', (req, res)=>{
    res.send("Heyyyy Nodemon")
})

app.get('/students', (req, res)=>{
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

app.listen(5000, ()=>{
    console.log("server start on PORT 5000")
})