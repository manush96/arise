exports.strings=function(c)
{
	var x=explode(c);
	console.log(x.length);
	trim(x);
	del(x);

	console.log(x);
}
function explode(c)
{
	var x = c.split("\n");
	return x;
}

function trim (x)
{
	var index = x.indexOf('');
	if (index > -1) 
	{
    	x.splice(index, 1);
	}
}

function del (x) {

	for(i=0; i<x.length;i++)
	{
		var result=x[i].toLowerCase();
		var n1=del_dot(result);
		if(n1==true || x[i].split(" ").length>3)
		{
			x.splice(i, 1);
			i--;
			continue;
		}
	}

}

function del_dot (result) {
	
		var arr = ["author of","writer of", "copies sold", "best seller","publication","an ","on ","for ","of ","with ","your ","as ","to ","the ","his ","do ","you ","what","how ","where ","where","which","which","a "];
		for (var i = arr.length - 1; i >= 0; --i) {
   	 	if (result.indexOf(arr[i]) != -1) {
        	return true;
    	}
	}
		return false;
}