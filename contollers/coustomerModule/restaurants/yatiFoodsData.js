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


//Getting Yati-Foods Restaurant Html Pages
router.get('/yati-foods',function(req,res){
    res.sendFile(path.resolve("restaurant_pages/yati-foods.html"));
});
router.get('/yatifoods',function(req,res){
    res.sendFile(path.resolve("restaurant_pages/yati-foods.html"));
});

router.get('/getrestaurant', function(req,res){
    restaurants.findOne({restaurant_name: 'Yati Foods'},function(err,docs){
        if(err || (docs==null)){
            console.log(err)
        }
        else{
            // console.log(docs)
            res.send(docs)
        }
    })
});


//Getting Data From Mongodb Data For YatiFoods Restaurant (Biriyani)
router.get("/YatiFoodsBiryani", function(req,res){
    datacollection.find({restaurant_name:"Yati Foods",category_name:"Biryani"}, function(err,result){
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


//Getting Data From Mongodb Data For YatiFoods Restaurant (Curries)
router.get("/YatiFoodsCurries", function(req,res){
    datacollection.find({restaurant_name:"Yati Foods",category_name:"Curries"}, function(err,result){
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


//Getting Data From Mongodb Data For YatiFoods Restaurant (Fried Rice and Noodles)
router.get("/YatiFoodsFriedRices", function(req,res){
    datacollection.find({restaurant_name:"Yati Foods",category_name:"Fried Rice and Noodles"}, function(err,result){
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


//Getting Data From Mongodb Data For YatiFoods Restaurant (Soft Drinks)
router.get("/YatiFoodsDrinks", function(req,res){
    datacollection.find({restaurant_name:"Yati Foods",category_name:"Soft Drinks"}, function(err,result){
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