var express = require("express");
var app = express();
app.path = require("path");
// var monk = require("monk");
const bodyparser = require("body-parser");
const multer =require("multer");
var path = require('path')

//Importing the Schema's
const registrationSchema = require('./models/customerSignUpSchema.js');
const custLogInData = require('./models/customerLogInSchema.js');
const custCardDetailsData = require('./models/cardDetailsSchema.js');
const resManagerLogin = require('./models/restaurantLoginSchema.js');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, '/template'))); 
app.use(express.static(path.join(__dirname, 'restaurant_pages')));
// app.use(express.static(path.join(__dirname, '../')));

// Mongodb Database Connection
const mongoose = require("mongoose");
// const urlencoded = require("body-parser/lib/types/urlencoded");
mongoose.connect("mongodb+srv://Sandeep1999:Sandeep3122@sandeep.nlcna.mongodb.net/Smakosh?retryWrites=true&w=majority", {
    useNewUrlParser : true,
    useUnifiedTopology : true,
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
var termsData = dbs.collection('terms');
// var resManagerLogin = dbs.collection('restaurantmanagerlogins');

const cookieParser = require("cookie-parser");
const sessions = require('express-session');

app.use(sessions({
    cookieName: "sessions",
    secret: "peednasnamhskalramuk9991",
    saveUninitialized:true,
    resave: false
}));

var session;


app.get("/", function(req,res) {
    session=req.session;
    if(session.user){
        res.send("Welcome User,<a href='/customer/home'>Click Here Fot Home</a>");
    }else

    res.sendFile(__dirname + "/template/home1.html");
});




//Customer Routers From Controllers
var customerRouter = require('./contollers/coustomerModule/coustomerModuleController.js')
app.use('/customer', customerRouter)

//Customer Login Routers From Controllers
var customerLoginRouter = require('./contollers/coustomerModule/customerLoginController.js')
app.use('/', customerLoginRouter)

//Getting home Page Data From Controllers
var usersDataRouter = require('./contollers/coustomerModule/homeDataController.js')
app.get('/homeData', usersDataRouter)


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


//Posting Customer Card Details To MongoDB
app.post('/sendCardDetails',function(req,res){
    console.log(req.body);
        var obj = new custCardDetailsData({
            CradNumber:req.body.CradNumber,
            ValidThrough:req.body.ValidThrough,
            Cvv:req.body.Cvv,
            NameOnCard:req.body.NameOnCard,
        })
    
        custCardDetailsData.findOne({ $or: [{ CradNumber:req.body.CradNumber }, {Cvv:req.body.Cvv}, ] }, function(err,docs){
            if(err || docs==null){
                //console.log(err)
                obj.save(function(err, results) {
                    if(results){
                       console.log("results"+ results);
                        res.send(results);
                    }else{
                        console.log(err)
                        res.send(err);
                    }
                })
            } 
            else{
                res.sendStatus(500);
            }
        })
    });


//Getting Users Data From MongoDB
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
        console.log("err");
    }
});


//Search Functionality
app.post('/search' , function(req,res){
    console.log(req.body)
    const searchField = req.body.searchItem;
    restaurants.find( {$or:[{restaurant_city:{$regex: searchField, $options: '$i'}}, {restaurant_name:{$regex: searchField, $options: '$i'}}]})
    .then(data => {
        res.send(data);
    })
});

//Getting Terms Data From MongoDB
app.get('/terms', function(req,res){
    termsData.findOne({heading1: 'Welcome to Smakosh'},function(err,docs){
        if(err || (docs==null)){
            console.log(err)
        }
        else{
            // console.log(docs)
            res.send(docs)
        }
    })
});


    
/*===============================
===============================
===============================
======== ADMIN SECTION ========
===============================
===============================
===============================*/

//Importing Schemas
const AdminLogin = require("./SmakoshAdmin/modals/user.js")
const { db, collection } = require("./SmakoshAdmin/modals/schema.js");
const collections = require("./SmakoshAdmin/modals/sub_schema.js");


app.use(express.static(path.join(__dirname, "SmakoshAdmin/public")));
app.use(bodyparser.urlencoded({ extended: true }));

const console = require("console");

var adminrouter = require("./contollers/adminModule/adminModuleController.js");
app.use("/admin", adminrouter);


var categoryRouter = require("./contollers/adminModule/catergoryController.js");
app.use("/", categoryRouter);

var subCategoryRouter = require("./contollers/adminModule/subCategoryController.js");
app.use("/", subCategoryRouter);


//Login Route
app.post('/adminLoginData', function(req,res){
    //res.sendFile(__dirname + '/template/signup.html');
    console.log(req.body);
    AdminLogin.findOne({Username:req.body.Username, Password:req.body.Password}, function(err,docs){
        if(err || docs==null){
            //console.log(err)
            res.send(err)
            // res.sendStatus(500)
        } 
        else{
            res.send(docs);
        }
    })
  });


    
/*=========================================
===========================================
===========================================
========RESTAURANT MANAGER SECTION ========
===========================================
===========================================
===========================================*/

//Restaurant Login Data
app.post('/resLoginData', function(req,res){
    //res.sendFile(__dirname + '/template/signup.html');
    session=req.session;
    console.log(req.body);
    
    resManagerLogin.findOne({Email : req.body.Email, Password:req.body.Password}, function(err,docs){
        if(err || docs==null){
            res.send(err)
            //console.log(err)
        } 
        else{
            session.user=docs;
            res.send(docs);
        }
    })
   
});

//listening to the server
app.listen(8080, ()=> console.log("Successfully Server Started"));