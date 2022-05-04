//app.use(express.static(path.join(__dirname, 'public')))
var express = require("express");
var app = express();
var path = require("path");
const multer =require("multer");
const cookieParser = require("cookie-parser");
 const sessions = require('express-session');

 app.use(sessions({
     cookieName: "sessions",
       secret: "Jyothika", 
       saveUninitialized:true, 
       resave: false 
    }));


const mongoose = require("mongoose");
const urlencoded = require("body-parser/lib/types/urlencoded");
mongoose.connect("mongodb+srv://Sandeep1999:Sandeep3122@sandeep.nlcna.mongodb.net/Smakosh?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(() => {
    console.log("Successfully Connected To MongoDB Database.");
}).catch((e) => {
    console.log("Not Connected To MongoDB Database.");
})
const connection = mongoose.connection;
const restauntmenuData = require('./Restaurant_Admin/models/addmenuschema.js')
const logData = require('./Restaurant_Admin/models/loginschema.js');
// const collection = require("./Restaurant_Admin/models/addmenuschema.js");

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../../template'))); 


app.get("/",(req,res)=> {
     session=req.session;
     if(session.user){
         res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
    res.sendFile(__dirname + "/Restaurant_Admin/loginform/login.html");
});
// app.get('/login',function(req,res){
//     res.sendFile(__dirname + "/Restaurant_Admin/loginform/login.html");
// });
// app.get("/editmenu", function(req,res){
//     session=req.session;
//      if(session.user){
//         console.log(session.user);
//         res.sendFile(__dirname + "/Restaurant_Admin/main/template/editmenu.html");
//     }
//      else {
//      res.redirect("/")
//      }
// });

// app.get("/components", (req,res) => {
//     session=req.session;
//      if(session.user){
//         console.log(session.user);
//         res.sendFile(__dirname + "/Restaurant_Admin/main/template/components.html");
//     }
//      else {
//      res.redirect("/")
//      }
// });

// app.get("/menu", (req,res) => {
//     session=req.session;
//      if(session.user){
//         console.log(session.user);
//         res.sendFile(__dirname + "/Restaurant_Admin/main/template/Addmenu.html");
//     }
//      else {
//      res.redirect("/")
//      }
// });
// app.get("/home", (req,res) => {
//      session=req.session;
//      if(session.user){
//         console.log(session.user);
//         res.sendFile(__dirname + "/Restaurant_Admin/main/template/home.html");
//     }
//      else {
//      res.redirect("/")
//      }

// });
app.get("/orders", (req,res) => {
    session=req.session;
     if(session.user){
        console.log(session.user);
        res.sendFile(__dirname + "/Restaurant_Admin/main/template/overall-orders.html");
    }
     else {
     res.redirect("/")
     }
});
app.get("/menus", (req,res) => {
    session=req.session;
     if(session.user){
        console.log(session.user);
        res.sendFile(__dirname + "/Restaurant_Admin/main/template/restaurant-menus.html");
    }
     else {
     res.redirect("/")
     }
});
app.get("/todayorders", (req,res) => {
    session=req.session;
     if(session.user){
        console.log(session.user);
        res.sendFile(__dirname + "/Restaurant_Admin/main/template/Today-orders.html");
    }
     else {
     res.redirect("/")
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

app.use('/menu', express.static('Upload/menuImages'))

app.post("/menuUpload", upload.single("menuImage"), (req , res) => {
    console.log(req.file)
    res.json({
        success:1,
        menuImange_url:`http://localhost:4000/menu/${req.file.filename}`
    })
})
app.use(errHandler)

function errHandler(err, req, res, next){
    if(err instanceof multer.MulterError){
        res.json({
            success:0,
            message:err.message
        })
    }
}

















app.post('/log', function(req,res){
    //res.sendFile(__dirname + '/template/signup.html');
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
app.get('/addmenuschema',(req,res)=>{
    restauntmenuData.find(function(err,docs){
        if(err || docs==null)
        {
            
            console.log(err)
        }
        else if(docs!=undefined)
        {
            
            
            res.send(docs);
        }
    })
});

    
//..............post method for addmenuschema.....................//
app.get("/menu", (req,res) => {

    res.sendFile(__dirname + "/Restaurant_Admin/main/template/Addmenu.html");

});

app.post('/sendMenuData',function(req,res){
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



// app.listen(4000, ()=> console.log("Successfully Server Started"));