const mongoose = require("mongoose");

const custCardDetailsSchema = new mongoose.Schema(
{
    //Restaurant Schema
    RestName:{
        type:String,
        require:true
    },
    
    RestNumber:{
        type:String,
        require:true
    },
    RestEmail:{
        type:String,
        require:true
    },
    RestPhone:{
        type:Number,
        require:true
    },
    RestAddress:{
        type:String,
        require:true
    },
    RestLoginPassword:{
        type:String,
        require:true
    },
    // Restaurant Manager Side Schema
    RestManagerName:{
        type:String,
        require:true
    },
    RestManagerNumber:{
        type:Number,
        require:true
    },
    RestManagerEmail:{
        type:String,
        require:true
    },
    
    RestManagerEmail:{
        type:String,
        require:true
    },
    RestManagerEmail:{
        type:String,
        require:true
    },


})