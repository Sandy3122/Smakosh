var express = require("express");
var app = express();
app.path = require("path");
// var monk = require("monk");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
var path = require('path')

//Importing the Schema's
const registrationSchema = require('./models/customerSignUpSchema.js');
const custLogInData = require('./models/customerLogInSchema.js');


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


var monk = require('monk');
var dbs = monk('mongodb+srv://Sandeep1999:Sandeep3122@sandeep.nlcna.mongodb.net/Smakosh?retryWrites=true&w=majority')
var datacollection = dbs.collection('items')


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/template/home1.html");
});


//sending registration data to database
app.post('/sendData', function(req,res){
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

app.get('/getRegistrationSchema',(req,res)=>{
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



//posting login data
app.post('/loginData', function(req,res){
    //res.sendFile(__dirname + '/template/signup.html');
    console.log(req.body);
    
    registrationSchema.findOne({Email :req.body.Email, Password:req.body.Password}, function(err,docs){
        if(err || docs==null){
            //console.log(err)
            res.sendStatus(500)
        } 
        else{
            res.send(docs);
        }
    })
   
});

//Getting Data From Mongodb Data Fot Restaurants
app.get("/restaurantPizzaHut", function(req,res){
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
app.get('/status_onprocess',function(req,res){
    res.sendFile(__dirname + "/template//status_onprocess.html");
});



//Getting Restaurant html pages 

app.get('/pizza-hut',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/pizza-hut.html");
});
app.get('/yati-foods',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/yati-foods.html");
});
app.get('/dakshin-haweli',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/dakshin-haweli.html");
});
app.get('/kfc',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/kfc.html");
});
app.get('/sub-way',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/sub-way.html");
});
app.get('/royal-tiffins',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/royal-tiffins.html");
});
app.get('/bakes&cakes',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/bakes&cakes.html");
});
app.get('/overaction',function(req,res){
    res.sendFile(__dirname + "/restaurant_pages/overaction.html");
});


//getting admin pages

app.get('/adminlogin',function(req,res){
    res.sendFile(__dirname + "/template/admin_login.html");
});


//listening to the server
app.listen(8000, ()=> console.log("Successfully Server Started"));