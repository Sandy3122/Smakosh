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


//Getting KFC Restaurant Html Pages
router.get('/kfc',function(req,res){
    res.sendFile(path.resolve("restaurant_pages/kfc.html"));
});

router.get('/getrestaurant', function(req,res){
    restaurants.findOne({restaurant_name: 'KFC'},function(err,docs){
        if(err || (docs==null)){
            console.log(err)
        }
        else{
            // console.log(docs)
            res.send(docs)
        }
    })
});


//Getting Data From Mongodb Data For KFC Restaurant (Recommended)
router.get("/kfcRecommended", function(req,res){
    datacollection.find({restaurant_name:"KFC",category_name:"Recommended"}, function(err,result){
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


//Getting Data From Mongodb Data For KFC Restaurant (Snacks)
router.get("/kfcSnacks", function(req,res){
    datacollection.find({restaurant_name:"KFC",category_name:"Snacks"}, function(err,result){
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


//Getting Data From Mongodb Data For KFC Restaurant (Combos)
router.get("/kfcCombos", function(req,res){
    datacollection.find({restaurant_name:"KFC",category_name:"Combos"}, function(err,result){
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


//Getting Data From Mongodb Data For KFC Restaurant (Burgers)
router.get("/kfcBurgers", function(req,res){
    datacollection.find({restaurant_name:"KFC",category_name:"Burgers"}, function(err,result){
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