// var express = require("express");
// var app = express();
// app.path = require("path");
// // var monk = require("monk");
// const router = express.Router();
// var path = require('path')

// //Importing the Schema's
// const registrationSchema = require('../../models/customerSignUpSchema.js');
// const custLogInData = require('../../models/customerLogInSchema.js');
// const custCardDetailsData = require('../../models/cardDetailsSchema.js');

// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

// app.use(express.static(path.join(__dirname, '/template'))); 
// app.use(express.static(path.join(__dirname, 'restaurant_pages')));
// // app.use(express.static(path.join(__dirname, '../')));


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

// //Monk Connection
// var monk = require('monk');
// const { builtinModules } = require("module");
// var dbs = monk('mongodb+srv://Sandeep1999:Sandeep3122@sandeep.nlcna.mongodb.net/Smakosh?retryWrites=true&w=majority');
// var datacollection = dbs.collection('items');
// var restaurants = dbs.collection('restaurantsData');

// //Posting Customer Card Details To MongoDB
// app.post('/sendCardDetails',function(req,res){
//     console.log(req.body);
//         var obj = new custCardDetailsData({
//             CradNumber:req.body.CradNumber,
//             ValidThrough:req.body.ValidThrough,
//             Cvv:req.body.Cvv,
//             NameOnCard:req.body.NameOnCard,
//         })
    
//         custCardDetailsData.findOne({ $or: [{ CradNumber:req.body.CradNumber }, { ValidThrough:req.body.ValidThrough }, {Cvv:req.body.Cvv}, ] }, function(err,docs){
//             if(err || docs==null){
//                 //console.log(err)
//                 obj.save(function(err, results) {
//                     if(results){
//                        console.log("results"+ results);
//                         res.send(results);
//                     }else{
//                         console.log(err)
//                         res.send(err);
//                     }
//                 })
//             } 
//             else{
//                 res.sendStatus(500);
//             }
//         })
//     });

//     module.exports = router