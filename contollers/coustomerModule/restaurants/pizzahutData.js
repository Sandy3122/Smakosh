var express = require("express");
var app = express();
var path = require('path');

var router = express.Router();
//Declaring The Path
app.use(express.static(path.join(__dirname, './'))); 
app.use(express.static(path.join(__dirname, '../../restaurant_pages')));


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
var datacollection = dbs.collection('items');
var restaurants = dbs.collection('restaurantsData');


router.get('/pizza-hut',function(req,res){
    res.sendFile(path.resolve("restaurant_pages/pizza-hut.html"));
});

router.post('/cart', function(req,res){
    // console.log(req.body)
    datacollection.find({"item_name":req.body.name}, function(err,docs){
        if(err){
            res.sendStatus(500)
        }
        else{
            res.send(docs)
        }
    })
    
})

router.post('/getrestaurant', function(req,res){
    restaurants.findOne({restaurant_name: req.body.name },function(err,docs){
        if(err || (docs==null)){
            console.log(err)
        }
        else{
            // console.log(docs)
            res.send(docs)
        }
    })
});

//Getting Data From Mongodb Data For PizzaHut Restaurant (Veg Items)


router.get("/VegRestaurent", function(req,res){
    datacollection.find({restaurant_name:req.body.restaurant_name,category_name:"Veg"}, function(err,result){
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


router.get("/PizzaHutVeg", function(req,res){
    datacollection.find({restaurant_name:"Pizza Hut",category_name:"Veg Pizza"}, function(err,result){
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


//Getting Data From Mongodb Data For PizzaHut Restaurant (Non-Veg Items)
router.get("/PizzaHutNonVeg", function(req,res){
    datacollection.find({restaurant_name:"Pizza Hut",category_name:"Non-Veg Pizza"}, function(err,result){
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


//Getting Data From Mongodb Data For PizzaHut Restaurant (Beverages Items)
router.get("/PizzaHutBeverages", function(req,res){
    datacollection.find({restaurant_name:"Pizza Hut",category_name:"Desserts & Beverage's"}, function(err,result){
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


//Getting Data From Mongodb Data For PizzaHut Restaurant (Drinks)
router.get("/PizzaHutDrinks", function(req,res){
    datacollection.find({restaurant_name:"Pizza Hut",category_name:"Soft Drink's"}, function(err,result){
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

router.get('/pizza', function(req, res){
    MyModel.find().distinct('_id', 
function(error,ids){
    //ids is an array of all onjectids
});
})

module.exports = router

