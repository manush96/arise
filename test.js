hello(function(response)
{
	console.log("in response")
	console.log(response)
})

function hello(callback)
{
	var a=[];
	/*
	for(var i=0;i<a.length;i++)
	{
		a.push("hello");
		a.push("world");
		a.push("good wine");
		a.push("is here");

		var jk=jk+111;
	}
	callback(a);*/
	var async=require('async');


	async.each(a,function(a,callback)
	{
	 	callback();
	},function(err)
	{
	 	return callback(a);
	});
}