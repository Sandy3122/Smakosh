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


//Getting Royal Tiffins Restaurant Html Pages
router.get('/royal-tiffins',function(req,res){
    res.sendFile(path.resolve("restaurant_pages/royal-tiffins.html"));
});

router.get('/getrestaurant', function(req,res){
    restaurants.findOne({restaurant_name: 'Royal Tiffins'},function(err,docs){
        if(err || (docs==null)){
            console.log(err)
        }
        else{
            // console.log(docs)
            res.send(docs)
        }
    })
});


//Getting Data From Mongodb Data For Royal Tiffins Restaurant (Indian Tiffins)
router.get("/RoyalTiffinsIndian", function(req,res){
    datacollection.find({restaurant_name:"Royal Tiffins",category_name:"Indian Tiffins"}, function(err,result){
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


//Getting Data From Mongodb Data For Royal Tiffins Restaurant (North Indians Tiffins)
router.get("/RoyalTiffinsNorth", function(req,res){
    datacollection.find({restaurant_name:"Royal Tiffins",category_name:"North Indians Tiffins"}, function(err,result){
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


//Getting Data From Mongodb Data For Royal Tiffins Restaurant (Punjabi Tiffins)
router.get("/RoyalTiffinsPunjabi", function(req,res){
    datacollection.find({restaurant_name:"Royal Tiffins",category_name:"Punjabi Tiffins"}, function(err,result){
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


//Getting Data From Mongodb Data For Royal Tiffins Restaurant (Chinese Fusion Dosa)
router.get("/RoyalTiffinsChinese", function(req,res){
    datacollection.find({restaurant_name:"Royal Tiffins",category_name:"Chinese Fusion Dosa"}, function(err,result){
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