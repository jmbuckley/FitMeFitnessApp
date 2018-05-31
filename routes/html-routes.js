const router = require("express").Router()
// var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

router

  // If no matching route is found default to home
  .get("/", function (req, res) {
    res.render("home");
  })

.get("/logged", function (req, res) {
  console.log()
  res.render("logged");
})

module.exports = router