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
var dbs = monk('mongodb+srv://Sandeep1999:Sandeep3122@sandeep.nlcna.mongodb.net/Smakosh?retryWrites=true&w=majority');
var datacollection = dbs.collection('items');
var restaurants = dbs.collection('restaurantsData');

//Getting Freezing Hub Restaurant Html Pages
router.get('/freezingHub',function(req,res){
    res.sendFile(path.resolve("restaurant_pages/freezingHub.html"));
});

router.get('/getrestaurant', function(req,res){
    restaurants.findOne({restaurant_name: 'Freezing Hub'},function(err,docs){
        if(err || (docs==null)){
            console.log(err)
        }
        else{
            // console.log(docs)
            res.send(docs)
        }
    })
});


//Getting Data From Mongodb Data For Freezing Hub Restaurant (Lassi)
router.get("/FreezingHubLassi", function(req,res){
    datacollection.find({restaurant_name:"Freezing Hub",category_name:"Lassi"}, function(err,result){
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


//Getting Data From Mongodb Data For Freezing Hub Restaurant (Ice Creams)
router.get("/FreezingHubIceCreams", function(req,res){
    datacollection.find({restaurant_name:"Freezing Hub",category_name:"Ice Creams"}, function(err,result){
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


//Getting Data From Mongodb Data For Freezing Hub Restaurant (Falooda)
router.get("/FreezingHubFalooda", function(req,res){
    datacollection.find({restaurant_name:"Freezing Hub",category_name:"Falooda"}, function(err,result){
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


//Getting Data From Mongodb Data For Freezing Hub Restaurant (Kids Special)
router.get("/FreezingHubKidsSpecial", function(req,res){
    datacollection.find({restaurant_name:"Freezing Hub",category_name:"Kids Special"}, function(err,result){
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