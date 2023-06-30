let studentsArray = [
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

export const fsdController = (req, res) =>{
    res.json(studentsArray)
}

export const fsdTrainerController = (req,res) =>{
    // res.send(trainerArray)
}

export const newFsdDataController = (req, res) =>{
    const data = req.body
    studentsArray.push(data)
    console.log(studentsArray)
}
