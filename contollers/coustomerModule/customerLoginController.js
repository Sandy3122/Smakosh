var express = require("express");
var app = express();
app.path = require("path");
var router = express.Router();
// var monk = require("monk");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
var path = require('path')

//Importing the Schema's
const registrationSchema = require('../../models/customerSignUpSchema.js');
const custLogInData = require('../../models/customerLogInSchema.js');


app.use(express.static(path.join(__dirname, '../../template'))); 
app.use(express.static(path.join(__dirname, '../../restaurant_pages')));
// app.use(express.static(path.join(__dirname, '../')));

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


// var monk = require('monk');
// var dbs = monk('mongodb+srv://Sandeep1999:Sandeep3122@sandeep.nlcna.mongodb.net/Smakosh?retryWrites=true&w=majority')
// var datacollection = dbs.collection('items')
// var restaurants = dbs.collection('restaurantsData')

var session;


//LogIn Route and getting data from mongodb
// router.get('/login',function(req,res){
//     session=req.session;
//     if(session.user){
//         res.send("Welcome User <a href=\'/customer/logout'>click to logout</a>");
//     }else
//     res.sendFile(path.resolve('template/login.html'));
// });

//sending registration data to database
router.post('/sendData', function(req,res){
    console.log(req.body);
    var obj = new registrationSchema({
        Name:req.body.Name,
        MobileNumber:req.body.MobileNumber,
        Email:req.body.Email,
        Password:req.body.Password,
        ConfirmPassword:req.body.ConfirmPassword,
    })

    registrationSchema.findOne({ $or: [{ Name:req.body.Name }, { MobileNumber:req.body.MobileNumber }, {Email: req.body.Email }, ] }, function(err,docs){
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



//getting registration data
router.get('/getRegistrationSchema',(req,res)=>{
registrationSchema.find(function(err,result){
        if(err || result==null)
        {
            
            console.log(err)
        }
        else if(result!=undefined)
        {
            
            console.log(result)
            res.send(result);
        }
    })
});


//Login Data
router.post('/loginData', function(req,res){
    //res.sendFile(__dirname + '/template/signup.html');
    session=req.session;
    console.log(req.body);
    
    registrationSchema.findOne({Email :req.body.Email, Password:req.body.Password}, function(err,docs){
        if(err || docs==null){
            //console.log(err)
            res.sendStatus(500)
        } 
        else{
            // session=req.session;
            session.user=docs;
            res.send(docs);
        }
    })
});

module.exports = router