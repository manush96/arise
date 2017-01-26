
var k=hello(5,function(response){
console.log(response);
return response;

});

function hello(i,callback)
{
	for(var j=0;j<100000;j++)
	{
		j=j+1;
	}
	man(function(response)
	{
		return response;
	}
	);
	callback("ma");
}
function man(callback)
{
	for(var j=0;j<100000;j++)
	{
		j=j+1;
	}
	callback("this is");

}