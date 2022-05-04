const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  name: { type: String },
  CategoryName: { type: String },
  Description: { type: String },
});

module.exports = mongoose.model("AdminAddSubCategory", itemsSchema);