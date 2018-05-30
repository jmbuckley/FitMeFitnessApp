var models = require("../express");
var db = require('../models');

// =====================================================
// Routing 
// =====================================================

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
    });

}