
var express = require('express'),
  bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

var env = app.get('env') == 'development' ? 'dev' : app.get('env');
var port = process.env.PORT || 8080;
 // IMPORT ROUTES
// =============================================================================
var router = express.Router();

// on routes that end in /users
// ----------------------------------------------------
router.route('/users')

// create a user (accessed at POST http://localhost:8080/api/users)
.post(function(req, res) {

var k=req.body.k;
res.send("hello");

});

// REGISTER OUR ROUTES
// =============================================================================
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);