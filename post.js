var request = require('request');
var fs = require('fs');
var bodyparser=require('body-parser');
function base64_encode(file) {
    var bitmap = fs.readFileSync(file);

    return new Buffer(bitmap).toString('base64');
}
var b;

var a=base64_encode("1.jpg");
exports.reque=function(k)
{
 request.post(
    'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyD3exLufj6MrT_5j50bRJB7kBhktljsDWU',
    { json: {
  "requests":[
    {
      "image":{
        "content":k
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
     
          b=body;    
        }
    }

)
 console.log(b);
 return b;
}
