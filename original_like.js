var tmp=[];
exports.search=function(m2,callback)
{
	//console.log(m2);
	proce(m2,function(response)
	{
		callback(response);
	});
}
var proce=function(m2,callback)
{
	var x=m2.split(",");
	for(var i=0;i<x.length;i++)
	{
		leboncoin(x[i],function(response){
		
		var p=JSON.stringify(response);
		var proc=JSON.parse(response);
		hell(p,proc,m2,function(response)
		{
			callback(response);
		}
		);
		
		});
	}	
}
var hell=function(p,re,m2,callback)
{
	var q='';
	var ik=re.hasOwnProperty("items");

		if(re.hasOwnProperty("items"))
		{
		 	var match=require("./match.js");
			var l=re.items[0].volumeInfo.title;
			ins(l);
			var like=match.check(l,m2,function(response)
				{
					return response;
				});
			if(like>0)
			{
				q=q+re.items[0].volumeInfo.title;	

			}
		}
		callback(q);
		
}
var leboncoin = function (m,callback) {
    var http = require('http')
    var bl = require('bl')
    if(m=='')
    {
    	m="harry";
    }
    var request=require("request");
 request('https://www.googleapis.com/books/v1/volumes?q='+m, function (err,response,body) {
        response.pipe(bl(function (err, data) {
            if (err) {
                callback(err);
                return;
            }
            var data = data.toString()
            var description = body;
            callback(description);
        }))
    })
}
function ins(title)
{
	var chk = false;
	for(var z=0; z< tmp.length; z++)
	{
		if(tmp[z].title == title)
		{
			chk = true;
			tmp[z].count++;
		}
	}
	if(!chk)
	{
		var tmp_title = { title: title, count: 1 };
		tmp.push(tmp_title);
	}
}