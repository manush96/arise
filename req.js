var tmp={title:"No response",like:0};
var arr = [];
var count=1;
var pro=require("promise");
exports.search=function(m2,l,callback)
{
	arr = m2.split(',');
	proce(m2,l, function()
	{
		//console.log("returning from search")
		callback(JSON.stringify(tmp));
	});
	
}
var async=require("async");
var proce=function(m2,l,callback)
{
		
			var x=m2.split(",");
			async.each(x,function(x,callback)
			{

				leboncoin(x,l,function(response)
					{
						//console.log("ho");
						callback();
					});
		
			},function(err)
			{
				//console.log("returning from proce")
				return callback();
			});
		
}
var leboncoin = function (m,l,callback) {
    var http = require('http')
    var bl = require('bl')
    if(m=='')
    {
    	m="harry";
    }
    var request=require("request");
 	//console.log("in leboncoin")
 	request('https://www.googleapis.com/books/v1/volumes?q='+m, function (err,response,body)
 	{
        //var data = body.toString()
      if(response!=undefined)
       {
	        var response = body;

	        var proc=JSON.parse(response);
			var items = proc.items;
			var title;
			async.each(items,function(item,callback)
			{
				title = item.volumeInfo.title;
				ins(title,l,function(response)
					{
						callback();
					});

			},
			function(err)
			{
				//console.log("returning from leboncoin")
				return callback();
			});
		}
    });

}
function ins(title,l,callback)
{
	var chk = false;
	var like=0;
	var x=l.split("\n");
	async.each(x,function(x1,callback)
	{
		var k=title.split(" ");
		var j2=0;
		for(var j1=0;j1<k.length;j1++)
		{
			if(k[j1].toLowerCase()==x1.toLowerCase())
			{
				like++;
			}
		}
		callback();			
	},function(err)
	{
		console.log(like);
		if(like>tmp.like)
		{
			tmp.title=title;
			tmp.like=like;
		}
		return callback();
	});
}
