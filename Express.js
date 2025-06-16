const express=require('express')
const app=express()
app.use(express.json())
const students = [];
class Student {
    constructor(name,grade){
        this.name=name
        this.grade=grade
    }
    getDetails(){
        console.log(`Name:${this.name},Grade:${this.grade}`)
    }
}
app.post("/students",(req,res)=>{
    const{name,grade}=req.body
    if(!name || !grade){
        return res.status(400).json({Error:"Name and Grade are required."})
    }

    const student=new Student(name,grade)
    students.push(student)
    res.status(201).json({message:"Student Added.",student})
})

app.get("/students",(req,res)=>{
    res.status(200).json(students)
})

app.listen(4002,()=>{
    console.log("Application running on port 4002")
})