var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  
  app.get("/data", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/main.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

};
