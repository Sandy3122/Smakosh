// const express = require("express");
// const path = require("path");
// const router = express.Router();

// const AdminLogin = require("../../SmakoshAdmin/modals/user.js")

// router.post('/loginData', function(req,res){
//   //res.sendFile(__dirname + '/template/signup.html');
//   console.log(req.body);
//   AdminLogin.findOne({Username:req.body.Username, Password:req.body.Password}, function(err,docs){
//       if(err || docs==null){
//           //console.log(err)
//           res.sendStatus(500)
//       } 
//       else{
//           res.send(docs);
//       }
//   })
// });

// // router.post('/login', function (req, res) {
// //   Smakosh.findOne(
// //     { Username: req.body.Username, Password: req.body.Password },
// //     (err, result) => {
// //       if (err) {
// //         console.log(err);
// //       } else {
// //         if (result == null) {
// //           // console.log("null");
// //           //res.redirect("/admin/login");
// //           res.send(error);
// //         } else {
// //           // console.log("success");
// //           //req.sessions.users = result;
// //           session = req.session;
// //           session.users = result;
// //           res.send(result);
// //           //res.redirect("/admin/dashboard");
// //         }
// //       }
// //     }
// //   );
// // });

// module.exports = router;
