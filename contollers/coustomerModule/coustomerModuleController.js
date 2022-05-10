var express = require("express");
var app = express();
app.path = require("path");
var router = express.Router();
// var monk = require("monk");

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

var session;


//getting navbar html pages
router.get('/home',function(req,res){
    session=req.session;
    if(session.user){
        // console.log("working");
        console.log(session.user);
        res.sendFile(path.resolve('template/home.html'));
    }
    else{
        res.redirect("/customer/login")
    }
   
});

//LogIn Route and getting data from mongodb
router.get('/login',function(req,res){
    session=req.session;
    if(session.user){
        res.send("Welcome User <a href=\'/customer/logout'>click to logout</a>");
    }else
    res.sendFile(path.resolve('template/login.html'));
});


router.get('/restaurantSignIn',function(req,res){
    res.sendFile(path.resolve('template/signInRestaurant.html'));
});

router.get('/restaurantRegistration',function(req,res){
    res.sendFile(path.resolve('template/registerRestaurant.html'));
});

router.get('/signup',function(req,res){
    res.sendFile(path.resolve("template/signup.html"));
});

router.get('/contact-us',function(req,res){
    session=req.session;
    if(session.user){
        // console.log("working");
        console.log(session.user);
        res.sendFile(path.resolve("template/contact-us.html"));
    }
    else{
        res.redirect("/customer/login")
    }
});

router.get('/search',function(req,res){
    res.sendFile(path.resolve("template/search.html"));
});
router.get('/add_restaurant',function(req,res){
    res.sendFile(path.resolve("template/add_restaurant.html"));
});
router.get('/offers',function(req,res){
    res.sendFile(path.resolve("template/offers.html"));
});

router.get('/checkout',function(req,res){
    session=req.session;
    if(session.user){
        // console.log("working");
        console.log(session.user);
        res.sendFile(path.resolve('template/checkout.html'));
    }
    else{
        res.redirect("/customer/login")
    }
});

//logout user
router.get("/logout",function(req,res){
    req.session.destroy();
    res.redirect("/");
})

//getting footer html pages
router.get('/terms',function(req,res){
    res.sendFile(path.resolve("template/terms.html"));
});
router.get('/my_order',function(req,res){
    session=req.session;
    if(session.user){
        // console.log("working");
        console.log(session.user);
        res.sendFile(path.resolve("template/my_order.html"));
    }
    else{
        res.redirect("/customer/login")
    }
});
router.get('/coming-soon',function(req,res){
    res.sendFile(path.resolve("template/coming-soon.html"));
});
router.get('/privacy',function(req,res){
    session=req.session;
    if(session.user){
        // console.log("working");
        console.log(session.user);
        res.sendFile(path.resolve("template/privacy.html"));
    }
    else{
        res.redirect("/customer/login")
    }
});
router.get('/faq',function(req,res){
    res.sendFile(path.resolve("template/faq.html"));
});
router.get('/trending',function(req,res){
    res.sendFile(path.resolve("template/trending.html"));
});
router.get('/favorites',function(req,res){
    res.sendFile(path.resolve("template/favorites.html"));
});
router.get('/profile',function(req,res){
    session=req.session;
    if(session.user){
        // console.log("working");
        console.log(session.user);
        res.sendFile(path.resolve("template/profile.html"));
    }
    else{
        res.redirect("/customer/login")
    }
});
router.get('/verification',function(req,res){
    res.sendFile(path.resolve("template/verification.html"));
});
router.get('/location',function(req,res){
    res.sendFile(path.resolve("template/location.html"));
});
router.get('/map',function(req,res){
    res.sendFile(path.resolve("template/map.html"));
});
router.get('/successful',function(req,res){
    res.sendFile(path.resolve("template/successful.html"));
});
router.get('/not-found',function(req,res){
    res.sendFile(path.resolve("template/not-found.html"));
});
router.get('/maintence',function(req,res){
    res.sendFile(path.resolve("template/maintence.html"));
});
router.get('/most_popular',function(req,res){
    res.sendFile(path.resolve("template/most_popular.html"));
});
router.get('/forgot_password',function(req,res){
    session=req.session;
    if(session.user){
        // console.log("working");
        console.log(session.user);
        res.sendFile(path.resolve("template/forgot_password.html"));
    }
    else{
        res.redirect("/customer/login")
    }
});


//getting nav_scroll html pages
router.get('/fries',function(req,res){
    res.sendFile(path.resolve("template/fries.html"));
});
router.get('/pizza',function(req,res){
    res.sendFile(path.resolve("template/pizza.html"));
});
router.get('/burger',function(req,res){
    res.sendFile(path.resolve("template/burger.html"));
});
router.get('/sandwich',function(req,res){
    res.sendFile(path.resolve("template/sandwich.html"));
});
router.get('/coffee',function(req,res){
    res.sendFile(path.resolve("template/coffee.html"));
});
router.get('/starter',function(req,res){
    res.sendFile(path.resolve("template/starter.html"));
});
router.get('/soup',function(req,res){
    res.sendFile(path.resolve("template/soup.html"));
});
router.get('/breakfast',function(req,res){
    res.sendFile(path.resolve("template/breakfast.html"));
});
router.get('/cakes',function(req,res){
    res.sendFile(path.resolve("template/cakes.html"));
});
router.get('/salad',function(req,res){
    res.sendFile(path.resolve("template/salad.html"));
});
router.get('/status_onprocess',function(req,res){
    res.sendFile(path.resolve("template//status_onprocess.html"));
});


module.exports = router;