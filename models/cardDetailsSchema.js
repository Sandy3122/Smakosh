
const mongoose = require("mongoose");

const customerCardDetails = new mongoose.Schema(
    {
        CardNumber:{
            type:Number,
            require:true
        },
        ValidThrough:{
            type:Number,
            require:true
        },
        Cvv:{
            type:Number,
            require:true
        },
        NameOnCard:{
            type:String,
            require:true
        }
    });

module.exports = mongoose.model("custCardDetailsData", customerCardDetails);