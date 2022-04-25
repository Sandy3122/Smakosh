var express = require("express");
var app = express();
app.path = require("path");
// var monk = require("monk");

var path = require('path')

//Importing the Schema's
const registrationSchema = require('./models/customerSignUpSchema.js');
const custLogInData = require('./models/customerLogInSchema.js');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, '/template'))); 
app.use(express.static(path.join(__dirname, 'restaurant_pages')));
// app.use(express.static(path.join(__dirname, '../')));


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
// var homeData = dbs.collection('restaurantsData');

const cookieParser = require("cookie-parser");
const sessions = require('express-session');

app.use(sessions({
    cookieName: "sessions",
    secret: "peednasnamhskalramuk9991",
    saveUninitialized:true,
    resave: false
}));



var session;

















//Customer Routers From Controllers
var customerRouter = require('./contollers/coustomerModule/coustomerModuleController.js')
app.use('/customer', customerRouter)

//Customer Login Routers From Controllers
var customerLoginRouter = require('./contollers/coustomerModule/customerLoginController.js')
app.use('/', customerLoginRouter)

//Restuarnt Routers
//Pizza Hut Restaurant Routers
var pizzaHutRouter = require('./contollers/coustomerModule/restaurants/pizzahutData.js')

app.use('/restaurant', pizzaHutRouter)

// Yati Foods Restaurant Routers
var yatiFoodsRouter = require('./contollers/coustomerModule/restaurants/yatiFoodsData.js')

app.use('/restaurant', yatiFoodsRouter)

// Dakshin Haweli Restaurant Routers
var dakshinHaweliRouter = require('./contollers/coustomerModule/restaurants/dakshinHaweliData.js')

app.use('/restaurant', dakshinHaweliRouter)

// KFC Restaurant Routers
var dakshinHaweliRouter = require('./contollers/coustomerModule/restaurants/kfcData.js')

app.use('/restaurant', dakshinHaweliRouter)

// SubWay Restaurant Routers
var subWayRouter = require('./contollers/coustomerModule/restaurants/subWayData.js')

app.use('/restaurant', subWayRouter)

// Royal Tiffins Restaurant Routers
var royalTiffinsRouter = require('./contollers/coustomerModule/restaurants/royalTiffinsData.js')

app.use('/restaurant', royalTiffinsRouter)

// Bakes & Cakes Restaurant Routers
var cakesRouter = require('./contollers/coustomerModule/restaurants/bakes&cakesData.js')

app.use('/restaurant', cakesRouter)

// Freezing Hub Restaurant Routers
var freezingHubRouter = require('./contollers/coustomerModule/restaurants/freezingHubData.js')

app.use('/restaurant', freezingHubRouter)


//it will gets users data
// var usersData = require('./contollers/coustomerModule/getusers.js')
// app.use('/getusers', usersData)
app.get('/getusers',function(req,res){
    session = req.session;
    if(session.user){
        registrationSchema.find({"_id":session.user._id},function(err,result){
            if(err){
                console.log("err");
            }
            else{
                //console.log("result");
                res.send(result)
            }
        });
    }
    else{
        console.log('err');
    }
});


app.get('/homeData', function(req,res){
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


app.get("/", function(req,res) {
    session=req.session;
    if(session.user){
        res.send("Welcome User,<a href='/customer/home'>Click Here Fot Home</a>");
    }else

    res.sendFile(__dirname + "/template/home1.html");
});



//getting admin pages
app.get('/adminlogin',function(req,res){
    res.sendFile(__dirname + "/template/admin_login.html");
});




//listening to the server
app.listen(8080, ()=> console.log("Successfully Server Started"));