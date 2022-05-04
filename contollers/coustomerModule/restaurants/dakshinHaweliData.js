var express = require("express");
var app = express();
var path = require('path')
var router = express.Router();


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

//Monk Connection
var monk = require('monk');
var dbs = monk('mongodb+srv://Sandeep1999:Sandeep3122@sandeep.nlcna.mongodb.net/Smakosh?retryWrites=true&w=majority')
var datacollection = dbs.collection('items')
var restaurants = dbs.collection('restaurantsData')


//Getting Dakshin Haweli Restaurant Html Pages
router.get('/dakshin-haweli',function(req,res){
    res.sendFile(path.resolve("restaurant_pages/dakshin-haweli.html"));
});

router.get('/getrestaurant', function(req,res){
    restaurants.findOne({restaurant_name: 'Dakshin Haweli'},function(err,docs){
        if(err || (docs==null)){
            console.log(err)
        }
        else{
            // console.log(docs)
            res.send(docs)
        }
    })
});


//Getting Data From Mongodb Data For Dakshin Haweli Restaurant (Starters)
router.get("/DakshinHaweliStarters", function(req,res){
    datacollection.find({restaurant_name:"Dakshin Haweli",category_name:"Starters"}, function(err,result){
        if(err){
            console.log(err)
            // res.sendStatus(500)
        } 
        else{
            console.log(result);
            res.send(result);
        }
    })
});


//Getting Data From Mongodb Data For Dakshin Haweli Restaurant (Breads)
router.get("/DakshinHaweliBreads", function(req,res){
    datacollection.find({restaurant_name:"Dakshin Haweli",category_name:"Breads"}, function(err,result){
        if(err){
            console.log(err)
            // res.sendStatus(500)
        } 
        else{
            console.log(result);
            res.send(result);
        }
    })
});


//Getting Data From Mongodb Data For Dakshin Haweli Restaurant (Fried Rice and Noodles)
router.get("/DakshinHaweliFriedRices", function(req,res){
    datacollection.find({restaurant_name:"Dakshin Haweli",category_name:"Fried Rice and Noodles"}, function(err,result){
        if(err){
            console.log(err)
            // res.sendStatus(500)
        } 
        else{
            console.log(result);
            res.send(result);
        }
    })
});


//Getting Data From Mongodb Data For Dakshin Haweli Restaurant (Sweets)
router.get("/DakshinHaweliSweets", function(req,res){
    datacollection.find({restaurant_name:"Dakshin Haweli",category_name:"Sweets"}, function(err,result){
        if(err){
            console.log(err)
            // res.sendStatus(500)
        } 
        else{
            console.log(result);
            res.send(result);
        }
    })
});

module.exports = router;