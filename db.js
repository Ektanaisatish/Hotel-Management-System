// const express = require('express')
// const mongoose = require('mongoose')

// const app = express()
// mongoose.connect('mongodb://localhost:27017/mern-rooms')

// const UserSchema = new mongoose.Schema({
//     name:String,
//     age :Number
// })

// const UserModel = mongoose.model("users",UserSchema)

// app.get ("/getUsers",( req, res)=>{
// UserModel.find({}).then(function(users){
//     res.json(users)
// }).catch(function(err){
//     console.log(err)
// }) 
// })

// app.listen(3001,() => {
//     console.log("server is running")
// })

 
const mongoose = require("mongoose");
var mongoURL = 'mongodb://localhost:27017/mern-rooms'
// var mongoURL = 'mongodb://localhost:27017/mern-foods'

mongoose.connect(mongoURL)
var connection = mongoose.connection
connection.on('error', ()=>{
console.log('Mongo DB Connection failed')
})
connection.on('connected', ()=>{
console.log('Mongo DB Connection Successful')  
})
module.exports = mongoose




