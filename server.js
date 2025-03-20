

const express = require('express')
const app = express();
const db=require("./db");
const bodyParser =require("body-parser");


app.use(bodyParser.json())
const Person=require("./models/Person");

const PORT=3000

app.get("/",function(req,res){
    res.send("welcome to my hotels what can i help you ")
});

//post method to post person (database)
app.post("/person",async(req,res)=>{
try{
    const data =req.body
    const newPerson =new Person(data);
    const response =await newPerson.save();
    console.log("data saved")
    res.status(201).json({ message: "Person added successfully!", data: response });

}catch(err){
    console.log(err)
    res.status(500).json({ message: "Internal Server Error", error: err.message });
}
})

//get method to get person (database)
app.get ("/person",async(req,res)=>{
    try{
        const data =await Person.find();
        console.log("data fetched");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"})
}

})
app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})