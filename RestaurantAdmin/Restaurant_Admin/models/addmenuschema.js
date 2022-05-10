const mongoose = require("mongoose");

const addmenuschema = new mongoose.Schema(
    {
        Menuname :{
            type:String,
            require:true
        },
        // Ingrediants:{
        //     type:String,
        //     require:true
        // },
        Selectcategory:{
            type:String,
            require:true
        },
        Selectsubcategory:{
            type:String,
            require:true
        },
        Quantity:{
            type:Number,
            require:true
        },
        Price:{
            type:Number,
            require:true
        },
        Description:{
            type:String,
            require:true
        }


    });

module.exports = mongoose.model("restaurantsMenuData", addmenuschema);
