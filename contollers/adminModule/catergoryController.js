const express = require("express");
const path = require("path");
var router = express.Router();

//Importing Schemas
const { db, collection } = require("../../SmakoshAdmin/modals/schema.js");
const AdminLogin = require("../../SmakoshAdmin/modals/user.js")
const collections = require("../../SmakoshAdmin/modals/sub_schema.js");

//add category
router.get("/category", function (req, res) {
    res.sendFile(__dirname + "/views/Category.html");
  });
  
  router.post("/", (req, res) => {
    var name = req.body.name;
    var description = req.body.description;
    var data = {
      name: name,
      description: description,
    };
    db.collection("Addcategory").insertOne(data, (err, collection) => {
      console.log("Added Successfully");
    });
    return res.send("Added Successfully");
  });
  
  router.get("/demo", (req, res) => {
    res.set({
      "Allow-access-Allow-Origin": "*",
    });
    return res.redirect("/");
  });

  module.exports=router