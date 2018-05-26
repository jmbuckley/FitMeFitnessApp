var stepCount = require("../data/stepCount");
var mood = require("../data/mood");  
var caloriesBurn = require("../data/caloriesBurn");
var hoursOfSleep = require("../hoursofSleep");
var boolOfActive = require("../data/boolOfActive");
var weighKG = require("../data/weighKG");
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

app.get('/', function(req, res) {
   res. render('index');
});   
  
app.get("/api/step", function(req, res) {
    res.json(stepCount);
  });

  app.get("/api/mood", function(req, res) {
    res.json(mood);
  });
  
  app.get("/api/calories", function(req, res) {
    res.json(caloriesBurn);
  });

  app.get("/api/hours", function(req, res) {
    res.json(hoursOfSleep);
  });

  app.get("/api/bool", function(req, res) {
    res.json(boolOfActive);
  });

  app.get("/api/weigh", function(req, res) {
    res.json(weighKG);
  });
  
  
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
