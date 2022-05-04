const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  Description: String,
});

module.exports = mongoose.model("AdminAddCategory", itemsSchema);