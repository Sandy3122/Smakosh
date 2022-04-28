var express = require("express");
var app = express();
app.path = require("path");
var router = express.Router();

var path = require('path')

app.use(express.json());
app.use(express.urlencoded({extended:false}));

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



router.get('/homeData', function(req,res){
    restaurants.find({},function(err,docs){
        if(err || (docs==null)){
            console.log(err)
        }
        else{
            // console.log(docs)
            res.send(docs)
        }
    })
});


module.exports = router