var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  
  app.get('/', function (req, res) {
    res.render("home.handlebars");
  });

  app.get('/logged', function(req, res) {
    res.render('logged.handlebars')
  }

  // If no matching route is found default to home
  // app.get('/index', function (req, res) {
    // res.json(path.join(__dirname + '/../views/index.handlebars'));
  // });
}
