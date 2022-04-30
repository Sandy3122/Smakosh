var express = require("express");
var app = express();
app.path = require("path");
// var monk = require("monk");

var path = require('path')

//Importing the Schema's
const registrationSchema = require('./models/customerSignUpSchema.js');
const custLogInData = require('./models/customerLogInSchema.js');
const custCardDetailsData = require('./models/cardDetailsSchema.js');

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

//Getting Users Data Route From Controllers
var usersDataRouter = require('./contollers/coustomerModule/getusers')
app.get('/getusers', usersDataRouter)

//Getting home Page Data From Controllers
var usersDataRouter = require('./contollers/coustomerModule/homeDataController.js')
app.get('/homeData', usersDataRouter)

// //Getting Card Details Data From Controllers
// var cardDetailsRouter = require('./contollers/coustomerModule/cardDetailsControllers.js')
// app.get('/sendCardDetails', cardDetailsRouter)


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





    
/*===============================
===============================
===============================
======== ADMIN SECTION ========
===============================
===============================
===============================*/

const AdminLogin = require("./SmakoshAdmin/modals/user.js")


app.use(express.static(path.join(__dirname, "/SmakoshAdmin/public")));

var adminrouter = require("./contollers/adminModule/adminModuleController.js");
app.use("/admin", adminrouter);

var loginrouter = require("./contollers/adminModule/AdminLoginControllers.js");
app.get("/login", loginrouter);   


//listening to the server
app.listen(8080, ()=> console.log("Successfully Server Started"));