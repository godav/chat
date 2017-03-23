var express = require("express");
var path = require('path');

var method = config.prototype;

function config(app) {

    // Setting .html as the default template extension
    app.set('view engine', 'html');

	// Initializing the ejs template engine
	app.engine('html', require('ejs').renderFile);

   // app.use(app.router);
//    app.use(function (req, res) {
//        // Use res.sendfile, as it streams instead of reading the file into memory.
//        res.sendFile(__dirname + '/../views/index.html');
//    });

//
	// Telling express where it can find the templates
	app.set('views', (__dirname + '/../views'));

//	//Files 
//	app.use(express.static(path.join('views')));

app.use('/', function(req, res) { 
   res.render('index');
});
}

method.get_config = function () {
    return this;
};

module.exports = config;

