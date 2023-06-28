export const fsdController = (req, res) =>{
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
}

export const fsdTrainerController = (req,res) =>{
    res.send([
        {
            name:"Atul",
            batch:[22,25]
        },
        {
            name:"Shudhar sir",
            batch:[24,26]
        }
    ])
}

