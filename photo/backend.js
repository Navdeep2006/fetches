const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(cors());
let photo;

app.post('/post',function(req,res){
    console.log(req.body);
    photo = req.body.image;
    res.json({});
})

app.get('/get',function(req,res){
    console.log(photo);
    res.json({image: photo});
})

app.listen(3000);