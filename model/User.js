var mongod = require('mongodb');
var mongoose = require('mongoose');

// config data
mongoose.connect('mongodb://localhost/shopping-cartV2');
var db = mongoose.connection;

const userSchema = new mongoose.Schema({
   username:String,
   password :String
});
const user = mongoose.model('user',userSchema);