var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
var port = 8080;

app.use(express.static("public"));

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'fitness_db'
});

connection.connect(function(err){
    if(err)throw err;
    console.log('Connected as id: '+connection.threadId);
})

app.get('/',function(req,res){
  connection.query('SELECT * FROM fitness_db;',function(err,data){
    res.render('index',{fitness:data});
    })
  })

  app.post('/create', function(req,res){
    connection.query('INSERT INTO fitness_db (fitness) VALUES (?);', [req.body.methodOverride
  ], function(err,result){
    if(err)throw err;
    res.redirect('/'); 
    
  });
});
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('connected to mongodb');
});

// set up routes
app.use('/auth', authRoutes);
app.use('/logged', profileRoutes);

// create home route
app.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

app.listen(port);
