// var express = require("express");
// var app = express();
// app.path = require("path");
// var router = express.Router();
// // var monk = require("monk");
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));
// var path = require('path')

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

// router.get('/getusers',function(req,res){
//     session = req.session;
//     if(session.user){
//         registrationSchema.find({"_id":session.user._id},function(err,result){
//             if(err){
//                 console.log("err");
//             }
//             else{
//                 //console.log("result");
//                 res.send(result)
//             }
//         });
//     }
//     else{
//         console.log(err);
//     }

  
// });

// module.exports = router;