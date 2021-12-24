const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
    .then(console.log('Connected to mongo successfully'))

const port = process.env.PORT || 5000 ;

app.get('/', (req,res)=>{
    res.json('Hello Ji')
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})