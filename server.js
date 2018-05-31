if (!process.env.PORT){
  require('dotenv').config();
}

var express = require("express");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

// const cookieSession = require('cookie-session');
const passport = require('./passport');
const authRoutes = require('./routes/auth-routes');
// const profileRoutes = require('./routes/profile-routes');
// const mongoose = require('mongoose');
// const keys = require('./config/keys');
const models = require("./models").sequelize;

var app = express();
// app.use(bodyParser.urlencoded({
//     extended: false
// }))

// app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
var port = process.env.PORT || 8080;

app.use(express.static("public"));

// app.use(cookieSession({
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: [keys.session.cookieKey]
// }));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
// mongoose.connect(keys.mongodb.dbURI, () => {
//   console.log('connected to mongodb');
// });

// // set up routes
// app.get('/',function(req,res){
//   connection.query('SELECT * FROM fitness_db;',function(err,data){
//     res.render('index',{fitness:data});
//     })
//   })
app.use('/auth', authRoutes);
// app.use('/logged', profileRoutes);

// create home route
// app.get('/', (req, res) => {
//   res.render('home', { user: req.user });
// // });

//   app.post('/create', function(req,res){
//     connection.query('INSERT INTO fitness_db (fitness) VALUES (?);', [req.body.methodOverride
//   ], function(err,result){
//     if(err)throw err;
//     res.redirect('/'); 
    
//   });
// });

models.sync().then(()=>{
  app.listen(port,()=>{
    if(!process.env.PORT){
      console.log(`Server is running on http://localhost:${port}`);
    }
  })
})