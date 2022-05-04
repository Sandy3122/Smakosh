const express = require("express");
const path = require("path");
var router = express.Router();

//Importing Schemas
const restauntmenuData = require('../../restaurent/Restaurant_Admin/models/addmenuschema.js')
const logData = require('../../restaurent/Restaurant_Admin/models/loginschema.js');
const collection = require("../../restaurent/Restaurant_Admin/models/addmenuschema.js");


router.get("/home", (req,res) => {
    session=req.session;
    if(session.user){
       console.log(session.user);
       res.sendFile(path.resolve("Restaurant_Admin/main/template/home.html"));
   }
    else {
    res.redirect("/customer/restaurantSignIn")
    }

});
router.get("/editmenu", function (req, res) {
    session=req.session;
    if(session.user){
       console.log(session.user);
       res.sendFile(path.resolve("Restaurant_Admin/main/template/editmenu.html"));
   }
    else {
    res.redirect("/customer/restaurantSignIn")
    }
});

router.get("/dashboard", function (req, res) {
    session=req.session;
     if(session.user){
        console.log(session.user);
        res.sendFile(path.resolve("Restaurant_Admin/main/template/components.html"));
    }
     else {
     res.redirect("/customer/restaurantSignIn")
     }
});

router.get("/orders", (req,res) => {
    session=req.session;
     if(session.user){
        console.log(session.user);
        res.sendFile(__dirname + "../../");
    }
     else {
     res.redirect("/")
     }
});


router.get("/restaurant", function (req, res) {
    res.sendFile(path.resolve(  "SmakoshAdmin/views/restaurant-data.html"));
});
router.get("/menu", function (req, res) {
    res.sendFile(path.resolve(  "SmakoshAdmin/views/menu-data.html"));
});

module.exports = router;