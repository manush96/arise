var q='a';
exports.search=function(m,callback)
{
	var EventEmitter = require("events").EventEmitter;
	var da = new EventEmitter();
	console.log(m);
	var p="hello";
	var x=m.split(",");
	for(var i=0;i<x.length;i++)
	{
		var data="hello";
		var request=require("request");
		request('https://www.googleapis.com/books/v1/volumes?q='+x[i],
		 function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        
	        da.data=body;
	        da.emit('update');
	    }
	    else
	    {
	    	data="nothing";
	    }
		});
		da.on('update',function()
		{
			var m1=da.data;
			m1=JSON.parse(m1);
			if(m1.items[0].volumeInfo.title)
			 {
			 	var match=require("./match.js");
				var l=m1.items[0].volumeInfo.title;
				var like=match.check(l,m);
				if(like>0)
				{
					console.log('its happening')
					q=JSON.stringify(m1);	
				}
			}
		});
		
	}
	return q;
}