var path = require('path')

module.exports = function (app) {

    app.get('/data', function(req, res) {
        res.sendFile(path.join(__dirname + '/../views/main.handlebars'));
    });

    app.get('/views', function(req,res) {
        res.sendFile(path.join(__dirname + '/../views/index.handlebars'));
    });

    }
