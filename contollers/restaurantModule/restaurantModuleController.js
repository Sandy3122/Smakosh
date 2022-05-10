const express = require("express");
const path = require("path");
var router = express.Router();
const multer =require("multer");
const cookieParser = require("cookie-parser");
 const sessions = require('express-session');

var session;

const restauntmenuData = require('../../RestaurantAdmin/Restaurant_Admin/models/addmenuschema.js')
const logData = require('../../RestaurantAdmin/Restaurant_Admin/models/loginschema.js');
const collection = require("../../RestaurantAdmin/Restaurant_Admin/models/addmenuschema.js");


// router.get('/login',function(req,res){
//     res.sendFile(path.resolve("Restaurant_Admin/loginform/login.html");
// });
router.get("/editmenu", function(req,res){
   session=req.session;
    if(session.user){
       console.log(session.user);
       res.sendFile(path.resolve("RestaurantAdmin/Restaurant_Admin/main/template/editmenu.html"));
   }
    else {
    res.redirect("/customer/restaurantSignIn")
    }
});

// router.get("/dashboard", (req,res) => {
//    session=req.session;
//     if(session.user){
//        console.log(session.user);
//        res.sendFile(path.resolve("Restaurant_Admin/main/template/components.html"));
//    }
//     else {
//     res.redirect("/customer/restaurantSignIn")
//     }
// });
router.get("/dashboard", (req,res) => {
    res.sendFile(path.resolve("RestaurantAdmin/Restaurant_Admin/main/template/components.html"));
});

router.get("/menu", (req,res) => {
    session=req.session;
     if(session.user){
        console.log(session.user);
        res.sendFile(path.resolve("RestaurantAdmin/Restaurant_Admin/main/template/Addmenu.html"));
    }
     else {
     res.redirect("/customer/restaurantSignIn")
     }
});
router.get("/restaurant-home", (req,res) => {
    session=req.session;
    if(session.user){
       console.log(session.user);
       res.sendFile(path.resolve("Restaurant_Admin/main/template/home.html"));
   }
    else {
    res.redirect("/customer/restaurantSignIn")
    }

});
router.get("/orders", (req,res) => {
   session=req.session;
    if(session.user){
       console.log(session.user);
       res.sendFile(path.resolve("Restaurant_Admin/main/template/overall-orders.html"));
   }
    else {
    res.redirect("/customer/restaurantSignIn")
    }
});
router.get("/menus", (req,res) => {
   session=req.session;
    if(session.user){
       console.log(session.user);
       res.sendFile(path.resolve("Restaurant_Admin/main/template/restaurant-menus.html"));
   }
    else {
    res.redirect("/customer/restaurantSignIn")
    }
});
router.get("/todayorders", (req,res) => {
   session=req.session;
    if(session.user){
       console.log(session.user);
       res.sendFile(path.resolve("Restaurant_Admin/main/template/Today-orders.html"));
   }
    else {
    res.redirect("/customer/restaurantSignIn")
    }
});


// Storage Engine

const storage = multer.diskStorage ({
   destination: './Upload/menuImages',
   filename : (req, file, cd)=>{
       return cd(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
   }
})

const upload = multer({
   storage : storage,
   limits:{filesize:1}

})

router.use('/menu', express.static('Upload/menuImages'))

router.post("/menuUpload", upload.single("menuImage"), (req , res) => {
   console.log(req.file)
   res.json({
       success:1,
       menuImange_url:`http://localhost:4000/menu/${req.file.filename}`
   })
})
router.use(errHandler)

function errHandler(err, req, res, next){
   if(err instanceof multer.MulterError){
       res.json({
           success:0,
           message:err.message
       })
   }
}

















router.post('/log', function(req,res){
   //res.sendFile(path.resolve('template/signup.html');
   session=req.session;
   console.log(req.body);
   
   logData.findOne({Email : req.body.Email, Password:req.body.Password}, function(err,docs){
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
///...............get method for addmenuschema.................. ///
router.get('/addmenuschema',(req,res)=>{
   collection.find(function(err,docs){
       if(err || docs==null)
       {
           
           console.log(err)
       }
       else if(docs!=undefined)
       {0
           
           
           res.send(docs);
       }
   })
});

   
//..............post method for addmenuschema.....................//
router.get("/menu", (req,res) => {

   res.sendFile(path.resolve("Restaurant_Admin/main/template/Addmenu.html"));

});

router.post('/sendMenuData',function(req,res){
   console.log(req.body);
   var obj = new menuData({
       Menuname:req.body.Menuname,
       Ingrediants:req.body.Ingrediants,
       Selectcategory:req.body.Selectcategory,
       Selectsubcategory:req.body.Selectsubcategory,
       Quantity:req.body.Quantity,
       Price:req.body.Price,
       Description:req.body.Description
   })

   menuData.insertOne(function(err,docs){
       if(err||docs == null){
           obj.save(function(err,results){
               if(results){
                   console.log("results"+results);
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

   // menuData.insertOne({$or:[{Menuname:req.body.Menuname},{Ingrediants:req.body.Ingrediants},{Selectcategory:req.body.Selectcategory}]},function(err,docs){
   //     if(err||docs == null){
   //         obj.save(function(err,results){
   //             if(results){
   //                 console.log("results"+results);
   //                 res.send(results);
   //             }else{
   //                 console.log(err)
   //                 res.send(err);
   //             }
   //         })
   //     }
   //     else{
   //         res.sendStatus(500);
   //     }
   // })
});


module.exports =router