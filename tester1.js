var po=require("./tester.js");
var a='';
po.leboncoin(function(response)
{
	a+=JSON.stringify(response);
	hello(a);

})


function hello(k)
{
	console.log("in hello "+k)
}