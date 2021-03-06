var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var mongo = require('mongodb');
var mongoose = require('mongoose');

// config data
mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;



// config router
var index = require('./routes/index');
var users = require('./routes/users');



var path = require('path');
// view engine setup
app.set('views', path.join(__dirname, '../shopping-cartV2/views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');



// uncomment after placing your favicon in /publics

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
// app.use(require('./router'));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3030, () => {
    console.log('Listening on port 3030...');
});
