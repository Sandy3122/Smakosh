const express = require("express");
const path = require("path");
var router = express.Router();


//add sub category
router.get("/SubCategory", function (req, res) {
    res.sendFile(__dirname + "/views/Admin/SubCategory.html");
  });
  
  router.post("/sub", (req, res) => {
    var name = req.body.name;
    var subcategoryname = req.body.subcategoryname;
    var description = req.body.description;
  
    var obj = new collections({
      name: name,
      SubCategoryName: subcategoryname,
      Description: description,
    });
  
    obj.save(function (err, results) {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    });
  
    return res.send("Sub Catergory Added Successfully!");
  });
  
  router.get("/getsubcat", function (req, res) {
    collections.find({}, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.send(docs);
      }
    });
  });

  module.exports=router