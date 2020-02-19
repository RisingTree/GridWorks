const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;
const mongoose = require('mongoose')
const jobRoutes = require('./routes/job-routes');
const HttpError =require('./models/http-error')

app.use(cors()) 

app.use(bodyParser.json());

app.use('/',jobRoutes);

app.use((req,res,next)=>{
    const err = new HttpError('Could not find this route.', 404)
    throw err;
});

app.use((err,req,res,next,)=>{
    if(res.headerSent){
        return next(err);
    }
    res.status(err.code || 500),
    res.json({message:err.message || "An unknown error has appeared."}) 
})

mongoose.connect('mongodb://localhost/GridDB',{useNewUrlParser:true})
.then(()=>{
    app.listen(PORT, function() {
        console.log("Server is now running on Port: " + PORT);
        });
}).catch((err)=>{
    console.log(err)
})

