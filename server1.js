var express = require('express'),
  bodyParser = require('body-parser');
var ab=require('./post.js');
var app = express();
app.use(bodyParser());
var int=require("./include.js");
var env = app.get('env') == 'development' ? 'dev' : app.get('env');
var port = process.env.PORT || 8083;

var env = "dev";
var config = require('./database.json')[env];
var password = config.password ? config.password : null;
var DataTypes = require("sequelize");


var router = express.Router();

router.route('/handshake')

.post(function(req,res)
{
	var uniqueId=req.body.uniqueId;
	res.json({"uniqueId":uniqueId,"success":1});

	var k=int.cohort();
  console.log(k);

})
router.route('/image')
.post(function(req,res)
{
	console.log(req.params.uniqueId);
  var k=req.body.image;
 
  console.log(ab.reque(k));
 
})
var st=require("./book_manip.js")
router.route("/testing")
 .post(function(req,res)
{
   var m=req.body.image;
   var l=st.strings(m);
   console.log(m);
  res.send(st.strings(m));
 })
router.route('/hello')
.post(function(req,res)
{
  var request = require('request');
  var fs = require('fs');
  var bodyparser=require('body-parser');
function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}

var a=req.body.image;
 request.post(
    'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyD3exLufj6MrT_5j50bRJB7kBhktljsDWU',
    { json: {
  "requests":[
    {
      "image":{
        "content":a
      },
      "features":[
        {
          "type":"TEXT_DETECTION",
          "maxResults":1
        }
      ]
    }
  ]
} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
          
          res.send(body);
          var m=body;
          var t=JSON.parse(m);
          int.search(m.responses.textAnnotations.description);
        }
    }
);

})
app.use('/api',router);
app.listen(port);
console.log("magic happens on port 8080");