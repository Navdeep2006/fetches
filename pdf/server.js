const express = require('express');
const cors = require('cors');
const app = express();

let pdf_data ="";

app.use(express.json({limit: "10mb"}))
app.use(cors());

app.post('/upload',(req,res)=>{
    pdf_data=req.body.pdf;
    // console.log(pdf_data);
    res.json({mes:"received"});
})

app.get('/get',(req,res)=>{
    console.log(pdf_data);
    res.json({pdf1:pdf_data});
})

app.listen(3000)