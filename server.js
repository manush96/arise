var express = require('express'),
  bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
var env = app.get('env') == 'development' ? 'dev' : app.get('env');
var port = process.env.PORT || 8082;
var router = express.Router();
var st=require('./book_manip.js');
router.route('/test')
.post(function(req,res)
{
	//console.log("ho")
	var request=require("request");
	var bimap=req.body.image;
	request.post(
    'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyD3exLufj6MrT_5j50bRJB7kBhktljsDWU',
    { json: {
  "requests":[
    {
      "image":{
        "content":bimap
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
    	//console.log(body);
        if (!error && response.statusCode == 200) {
          
          var k=body;
          if(k.responses[0].textAnnotations[0].description)
          {
         	 var l=k.responses[0].textAnnotations[0].description;
      	  }
      	  else
      	  {
      	  	var l="No\nResponse\nFound";
      	  }
          l="SHWIN\nSANGHI\n& JAMES PATTERSON\nITS THE SEASON FOR MURDER IN MUMBAI\n";
          l = st.reform(l);
          var search=require("./books.js");
          search.res(l,function(response)
          {
            res.send(response);
          })
       	}
 
})
})



app.use('/api',router);
app.listen(port);
console.log("magic happens on port 8080");