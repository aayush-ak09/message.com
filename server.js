const express = require("express")
const app=express()
const MG = require(__dirname + '/TelOTPSender');


app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/interface.html')
})

app.get('/public/interface.css',(req,res)=>{
    res.sendFile(__dirname + '/public/interface.css')
})

app.get('/public/interface.js',(req,res)=>{
    res.sendFile(__dirname + '/public/interface.js')
})



app.post("/submit", (req, res) => {
    const sender = req.body.From;
    const Recipent = req.body.To;
    const Message = req.body.Message;   
    // Handle the received form data here
    console.log("Received form data:",sender,Recipent);
    MG.sendOTP(Recipent,Message)
    // You can send a response back to the client if needed
    res.send("Form data received successfully!");
});

app.get('*',(req,res)=>{
    console.log(req.url)
})

app.listen('3009');