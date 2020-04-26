const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gliderifle:closed0813@cluster0-5sttu.gcp.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('mongoDB connected')).catch(err => console.log(err))
//mongodb+srv://gliderifle:<password>@cluster0-5sttu.gcp.mongodb.net/test?retryWrites=true&w=majority

app.get('/',(req,res) => res.send('Hello world!'))
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))