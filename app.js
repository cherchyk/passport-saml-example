var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    logger = require('morgan'),
    serveStatic = require('serve-static'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    http = require('http'),
    path = require('path'),
    qs = require('qs'),
    passport = require("passport");

var env = process.env.NODE_ENV || 'development',
  config = require('./config/config')[env];

require('./config/passport')(passport, config);


var app = express();

app.set('port', config.app.port);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session(
  {
    secret: 'this shit hits',
    resave: false,
    saveUninitialized: false
  }));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride());
app.use(serveStatic(path.join(__dirname, 'public')));

app.use(errorHandler());

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('500', { error: err }); 
});

require('./config/routes')(app, config, passport);

app.use(function(req, res, next){
  res.status(404);
  if (req.accepts('html')) {
    res.render('404',
      {
        url : req.url
      });
    return;
  }
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
  res.type('txt').send('Not found');
});

app.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
