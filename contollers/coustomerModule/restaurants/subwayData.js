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


//Getting SubWay Restaurant Html Pages
router.get('/sub-way',function(req,res){
    res.sendFile(path.resolve("restaurant_pages/sub-way.html"));
});
router.get('/subway',function(req,res){
    res.sendFile(path.resolve("restaurant_pages/sub-way.html"));
});

router.get('/getrestaurant', function(req,res){
    restaurants.findOne({restaurant_name: 'SubWay'},function(err,docs){
        if(err || (docs==null)){
            console.log(err)
        }
        else{
            // console.log(docs)
            res.send(docs)
        }
    })
});


//Getting Data From Mongodb Data For SubWay Restaurant (Burgers)
router.get("/SubWayBurgers", function(req,res){
    datacollection.find({restaurant_name:"SubWay",category_name:"Burgers"}, function(err,result){
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


//Getting Data From Mongodb Data For SubWay Restaurant (Pizza)
router.get("/SubWayPizza", function(req,res){
    datacollection.find({restaurant_name:"SubWay",category_name:"Pizza"}, function(err,result){
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


//Getting Data From Mongodb Data For SubWay Restaurant (Desserts)
router.get("/SubWayDesserts", function(req,res){
    datacollection.find({restaurant_name:"SubWay",category_name:"Desserts"}, function(err,result){
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


//Getting Data From Mongodb Data For SubWay Restaurant (Fries)
router.get("/SubWayFries", function(req,res){
    datacollection.find({restaurant_name:"SubWay",category_name:"Fries"}, function(err,result){
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