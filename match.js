exports.check=function(l,m,callback)
{
	var k=l.split(" ");

	var k1=m.split(",");
	var like=0;
	for(var i=0;i<k.length;i++)
	{
		if(k[i]=='')
		{
			return;
		}
		for(var j=0;j<k1.length;j++)
		{
			if(k1[j].toLowerCase()===k[i].toLowerCase())
			{
				like++;
			}
		}

	}
	callback(like);
}