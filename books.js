exports.res=function(l,callback)
{
	console.log()
	var request=require("request");
	var url = 'https://www.googleapis.com/books/v1/volumes?q='+l;
 	console.log(url);
 	request(url, function (err,response,body)
 	{
      if(response!=undefined)
       {
       		body = JSON.parse(body);
       		callback(body.items[0]);
	   }
    });

}