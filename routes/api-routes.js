var models = require("../express");
var db = require('../models');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    router.post('/users/new', function(req, res) {
        var newUser = req.body;
      
        db.User.create(newUser)
        .then(function(user) {
          res.redirect('/')
        })
        .catch(function(err) {
          res.json(err)
        })
      })
 
  
  app.post("/api/tables", function(req, res) {
    
  var totalCount 
  var currentData
  var count
   
    // Here we loop through all the data possibilities in the database.
    for (var i = 0; i < data.length; i++) {
      var currentData = data[i];
      totalCount = 0;

      console.log(currentData.count);
    }

   
    data.push(userData);

    res.json(bestMatch);
  });
};