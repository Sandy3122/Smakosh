var express = require("express");
var app = express();
var path = require('path')
var router = express.Router();


// Mongodb Database Connection
const mongoose = require("mongoose");
// const urlencoded = require("body-parser/lib/types/urlencoded");
mongoose.connect("mongodb+srv://Sandeep1999:Sandeep3122@sandeep.nlcna.mongodb.net/Smakosh?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(() => {
    console.log("Successfully Connected To MongoDB Database.");
}).catch((e) => {
    console.log("Not Connected To MongoDB Database.");
})
const connection = mongoose.connection;

//Monk Connection
var monk = require('monk');
var dbs = monk('mongodb+srv://Sandeep1999:Sandeep3122@sandeep.nlcna.mongodb.net/Smakosh?retryWrites=true&w=majority')
var datacollection = dbs.collection('items')
var restaurants = dbs.collection('restaurantsData')


//Getting Bakes & Cakes Restaurant Html Pages
router.get('/bakes&cakes',function(req,res){
    res.sendFile(path.resolve("restaurant_pages/bakes&cakes.html"));
});

router.get('/getrestaurant', function(req,res){
    restaurants.findOne({restaurant_name: 'Bakes & Cakes'},function(err,docs){
        if(err || (docs==null)){
            console.log(err)
        }
        else{
            // console.log(docs)
            res.send(docs)
        }
    })
});


//Getting Data From Mongodb Data For Bakes & Cakes Restaurant (Rolls)
router.get("/Bakes&CakesCakes", function(req,res){
    datacollection.find({restaurant_name:"Bakes & Cakes",category_name:"Rolls"}, function(err,result){
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


//Getting Data From Mongodb Data For Bakes & Cakes Restaurant (Rolls)
router.get("/Bakes&CakesRolls", function(req,res){
    datacollection.find({restaurant_name:"Bakes & Cakes",category_name:"Rolls"}, function(err,result){
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


//Getting Data From Mongodb Data For Bakes & Cakes Restaurant (Puffs)
router.get("/Bakes&CakesPuffs", function(req,res){
    datacollection.find({restaurant_name:"Bakes & Cakes",category_name:"Puffs"}, function(err,result){
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


//Getting Data From Mongodb Data For Bakes & Cakes Restaurant (Chocolates)
router.get("/Bakes&CakesChocolates", function(req,res){
    datacollection.find({restaurant_name:"Bakes & Cakes",category_name:"Chocolates"}, function(err,result){
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