var request=require("request");
exports.search=function(m,callback)
{
	if(m.constructor==Array)
	{
			for(var j=0;j<m.length;j++)
			{
				var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+m+"&limit=1&format=json";


				request.get(url,function(err,response,body){
				if(response!=null)
				{
					body=JSON.parse(body);
					callback(body[2]);
				}
				});

			}
	}
	else
	{
		var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+m+"&limit=1&format=json";


		request.get(url,function(err,response,body){
		if(response!=null)
		{
			body=JSON.parse(body)
			callback(body[2]);
		}
		});
	}
}