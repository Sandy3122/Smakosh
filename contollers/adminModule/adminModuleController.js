const express = require("express");
const path = require("path");
var router = express.Router();


router.get("/login", function (req, res) {
    res.sendFile(path.resolve(  "SmakoshAdmin/views/login.html"));
});

router.get("/dashboard", function (req, res) {
    res.sendFile(path.resolve(  "SmakoshAdmin/views/index.html"));
});
router.get("/restaurant", function (req, res) {
    res.sendFile(path.resolve(  "SmakoshAdmin/views/restaurant-data.html"));
});
router.get("/menu", function (req, res) {
    res.sendFile(path.resolve(  "SmakoshAdmin/views/menu-data.html"));
});
router.get("/users", function (req, res) {
    res.sendFile(path.resolve(  "SmakoshAdmin/views/Users.html"));
});
router.get("/category", function (req, res) {
    res.sendFile(path.resolve(  "SmakoshAdmin/views/Category.html"));
});
router.get("/subcategory", function (req, res) {
    res.sendFile(path.resolve(  "SmakoshAdmin/views/sub-category.html"));
});
router.get("/orderspage", function (req, res) {
    res.sendFile(path.resolve(  "SmakoshAdmin/views/orders.html"));
});
router.get("/revenue", function (req, res) {
    res.sendFile(path.resolve(  "SmakoshAdmin/views/revenue.html"));
});
router.get("/invoice", function (req, res) {
    res.sendFile(path.resolve(  "SmakoshAdmin/views/invoice.html"));
});
router.get("/reviews", function (req, res) {
    res.sendFile(path.resolve(  "SmakoshAdmin/views/reviews.html"));
});
router.get("/messages", function (req, res) {
    res.sendFile(path.resolve(  "SmakoshAdmin/views/messages.html"));
});


module.exports=router;