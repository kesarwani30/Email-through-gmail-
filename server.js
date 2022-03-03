const express=require("express");
const sendMail=require("./mail");
const path=require("path");
const app=express();

const PORT=3000;

//Data Parsing
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.post("/email",(req,res)=>{
    const {subject,email,text}=req.body;
    console.log("Data:",req.body);

    sendMail(email,subject,text,function(error,data){
        if(error){
            res.status(500).json({message:"Internal Error"});
        }else {
            res.json({message:"Email Send!!!"});
        }
    })

    return res.sendFile(path.join(__dirname,"view","success.html"))
})


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","index.html"));
});

app.listen(PORT,()=>console.log("Server has started at ",PORT));