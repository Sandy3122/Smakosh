// var express = require("express");
// var app = express();
// app.path = require("path");
// var router = express.Router();
// // var monk = require("monk");
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));
// var path = require('path')

// //Importing the Schema's
// const registrationSchema = require('../../models/customerSignUpSchema.js');
// const custLogInData = require('../../models/customerLogInSchema.js');
// // const resManagerLogin = require('../../models/restaurantLoginSchema.js');


// app.use(express.static(path.join(__dirname, '../../template'))); 
// app.use(express.static(path.join(__dirname, '../../restaurant_pages')));
// // app.use(express.static(path.join(__dirname, '../')));

// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

// // Mongodb Database Connection
// const mongoose = require("mongoose");
// // const urlencoded = require("body-parser/lib/types/urlencoded");
// mongoose.connect("mongodb+srv://Sandeep1999:Sandeep3122@sandeep.nlcna.mongodb.net/Smakosh?retryWrites=true&w=majority", {
//     useUnifiedTopology : true,
//     useNewUrlParser : true,
// }).then(() => {
//     console.log("Successfully Connected To MongoDB Database.");
// }).catch((e) => {
//     console.log("Not Connected To MongoDB Database.");
// })
// const connection = mongoose.connection;


// var monk = require('monk');
// var dbs = monk('mongodb+srv://Sandeep1999:Sandeep3122@sandeep.nlcna.mongodb.net/Smakosh?retryWrites=true&w=majority')
// var datacollection = dbs.collection('items')
// var restaurants = dbs.collection('restaurantsData')
// var resManagerLogin = dbs.collection('restaurantManagerLogin')

// var session;

// //Restaurant Login Data
// router.post('/resLoginData', function(req,res){
//     //res.sendFile(__dirname + '/template/signup.html');
//     session=req.session;
//     console.log(req.body);
    
//     resManagerLogin.findOne({Email : req.body.Email, Password:req.body.Password}, function(err,docs){
//         if(err || docs==null){
//             res.send(err)
//             //console.log(err)
//         } 
//         else{
//             session.user=docs;
//             res.send(docs);
//         }
//     })
   
// });


// module.exports = router