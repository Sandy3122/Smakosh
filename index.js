var express = require("express");
var app = express();
app.path = require("path");
// var monk = require("monk");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.use(express.static("contents"));
var path = require('path')
const RegisterationData = require('./schema.js');

app.use(express.static(path.join(__dirname, '/template'))); 
app.use(express.static(path.join(__dirname, 'restaurant_pages')));

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





app.get("/", (req,res) => {
    res.sendFile(__dirname + "/template/home1.html");
});


//sending registration data to database
app.post('/sendData', function(req,res){

    var obj = new RegisterationData({
        Name:req.body.Name,
        MobileNumber:req.body.MobileNumber,
        Email:req.body.Email,
        Password:req.body.Password,
        ConfirmPassword:req.body.ConfirmPassword,
    })

    obj.save(function(err, results) {
        if(results){
           console.log(results);
            res.send(results);
        }else{
            console.log(err)
            res.send(err);
        }
    })
   
});



//getting registration data

app.get('/getRegisterationData',(req,res)=>{
RegisterationData.find(function(err,result){
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


//getting navbar html pages

app.get('/home',function(req,res){
    res.sendFile(__dirname + "/template/home.html");
});
app.get('/login',function(req,res){
    res.sendFile(__dirname + "/template/login.html");
});
app.get('/signup',function(req,res){
    res.sendFile(__dirname + "/template/signup.html");
});
app.get('/contact-us',function(req,res){
    res.sendFile(__dirname + "/template/contact-us.html");
});
app.get('/search',function(req,res){
    res.sendFile(__dirname + "/template/search.html");
});
app.get('/add_restaurant',function(req,res){
    res.sendFile(__dirname + "/template/add_restaurant.html");
});
app.get('/offers',function(req,res){
    res.sendFile(__dirname + "/template/offers.html");
});
app.get('/checkout',function(req,res){
    res.sendFile(__dirname + "/template/checkout.html");
});



//getting footer html pages

app.get('/terms',function(req,res){
    res.sendFile(__dirname + "/template/terms.html");
});
app.get('/my_order',function(req,res){
    res.sendFile(__dirname + "/template/my_order.html");
});
app.get('/coming-soon',function(req,res){
    res.sendFile(__dirname + "/template/coming-soon.html");
});
app.get('/privacy',function(req,res){
    res.sendFile(__dirname + "/template/privacy.html");
});
app.get('/faq',function(req,res){
    res.sendFile(__dirname + "/template/faq.html");
});
app.get('/trending',function(req,res){
    res.sendFile(__dirname + "/template/trending.html");
});
app.get('/favorites',function(req,res){
    res.sendFile(__dirname + "/template/favorites.html");
});
app.get('/profile',function(req,res){
    res.sendFile(__dirname + "/template/profile.html");
});
app.get('/verification',function(req,res){
    res.sendFile(__dirname + "/template/verification.html");
});
app.get('/location',function(req,res){
    res.sendFile(__dirname + "/template/location.html");
});
app.get('/map',function(req,res){
    res.sendFile(__dirname + "/template/map.html");
});
app.get('/successful',function(req,res){
    res.sendFile(__dirname + "/template/successful.html");
});
app.get('/not-found',function(req,res){
    res.sendFile(__dirname + "/template/not-found.html");
});
app.get('/maintence',function(req,res){
    res.sendFile(__dirname + "/template/maintence.html");
});
app.get('/most_popular',function(req,res){
    res.sendFile(__dirname + "/template/most_popular.html");
});
app.get('/forgot_password',function(req,res){
    res.sendFile(__dirname + "/template/forgot_password.html");
});


//getting nav_scroll html pages
app.get('/fries',function(req,res){
    res.sendFile(__dirname + "/template/fries.html");
});
app.get('/pizza',function(req,res){
    res.sendFile(__dirname + "/template/pizza.html");
});
app.get('/burger',function(req,res){
    res.sendFile(__dirname + "/template/burger.html");
});
app.get('/sandwich',function(req,res){
    res.sendFile(__dirname + "/template/sandwich.html");
});
app.get('/coffee',function(req,res){
    res.sendFile(__dirname + "/template/coffee.html");
});
app.get('/starter',function(req,res){
    res.sendFile(__dirname + "/template/starter.html");
});
app.get('/soup',function(req,res){
    res.sendFile(__dirname + "/template/soup.html");
});
app.get('/breakfast',function(req,res){
    res.sendFile(__dirname + "/template/breakfast.html");
});
app.get('/salad',function(req,res){
    res.sendFile(__dirname + "/template/salad.html");
});


//Getting Restaurant html pages 

app.get('/pizza-hut',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/pizza-hut.html");
});
app.get('/restaurant2',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/restaurant2.html");
});
app.get('/restaurant3',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/restaurant3.html");
});
app.get('/restaurant4',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/restaurant4.html");
});
app.get('/restaurant5',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/restaurant5.html");
});
app.get('/restaurant6',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/restaurant6.html");
});
app.get('/restaurant7',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/restaurant7.html");
});
app.get('/restaurant8',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/restaurant8.html");
});


//getting admin pages

app.get('/adminlogin',function(req,res){
    res.sendFile(__dirname + "/template/admin_login.html");
});


//listening to the server
app.listen(8000, ()=> console.log("Successfully Server Started"));

