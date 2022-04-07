var express = require("express");
var app = express();
app.path = require("path");
// app.use(express.static("contents"));
var path = require('path')

// app.use(express.static(path.join(__dirname, './template/css')));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Mongodb Database Connection

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Sandeep1999:Sandeep3122@sandeep.nlcna.mongodb.net/PortfolioData?retryWrites=true&w=majority", {
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(console.log('Successfully Connected To MongoDB Database.'))

const connection = mongoose.connection;

const Portfolio = new mongoose.Schema(
    {
        data:Object,
    }
    );

const PortfolioData = connection.model("PortfolioData" , Portfolio);

// PortfolioData.find({},function(err, result){
//     if(err)
//         console.log(err);
//     else
//         console.log(result);
// });


app.get("/", function(req,res){
    res.sendFile(__dirname + "home.html");
});


// app.get("/data" , function(req,res){
//     PortfolioData.findOne({Name:"SEERAM.SANDEEP LAKSHMAN KUMAR"},function(err, result){
//         if(err){
//             console.log(err)
//         }
//         else{
//             res.send(result);
//         }
// })

// });

app.listen(4040, ()=> console.log("Successfully Server Started"));