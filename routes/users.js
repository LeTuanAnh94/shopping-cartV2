var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var mongod = require('mongodb');
var mongoose = require('mongoose');
// confif bodyparser
var urlencodedParser = bodyParser.urlencoded({ extended: true });
// config data
mongoose.connect('mongodb://localhost/shopping-cartV2');
var db = mongoose.connection;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// login
router.get('/login',function(req,res) {

    // var username = req.params.name;
    // var pwd = req.params.pwd;
    // if(username != null && pwd != null)
    // console.log(" "+username);
    // const userSchema = new mongoose.Schema({
    //     username:String,
    //     password :String
    // });
    // const user = mongoose.model('user',userSchema);
    //
    // user.findOne({'username :'})
    //
    // // user.find().exec((err,users) => {
    // //     console.log(users.username);
    // // });
    res.render('Login');
});


router.post('./login',urlencodedParser,function(req,res) {
   var username = req.body.name;
   var pwd = req.body.pwd;
   console.log("p "+username);
   // validator
   if(username != null && pwd != null){

       const userSchema = new mongoose.Schema({
           username:String,
           password :String
       });
       console.log('OK');
       const user = mongoose.model('user',userSchema);

       user.findOne({"username":username,"password":pwd},'name occupation',(err,user)=>{
           if (err) return handleError(err);
           console.log('%s %s is a %s.', user.id, person.occupation) // Space Ghost is a talk show host.
       });

       // user.find().exec((err,users) => {
       //     console.log(users.username);
       // });

   }else{
        res.redirect('/users/login');
   }





});




module.exports = router;
