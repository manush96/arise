var cities=['ahmedabad','surat','baroda'];

var async=require("async");
var i=0;
var request=require("request");
async.each(cities,function(city,callback)
{
	request.get('https://maps.googleapis.com/maps/api/geocode/json?address='+city+'&key=AIzaSyBUMJ0QuTPugmz3U9rXxpghBLl-STc5u_E',function(err,response,body){
		var cit=city;
		body=JSON.parse(body);
		var lat=body.results[0].geometry.location.lat;
		var long=body.results[0].geometry.location.lng;
		console.log(cit,lat,long);
	});
},function(err)
{
	//ahiya je krvu hy e krvanu akhu loop pate pachhi execute thashe aa portion
})