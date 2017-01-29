exports.tweets=function(q,callback)
{

var Twitter = require('twitter');
console.log(q);
var client = new Twitter({
  consumer_key: 'CsvHjpRXSPNBBRy5po7ZIDHRn',
  consumer_secret: 'yMQ1t6TPPiFpTpDdYtaghx6hNbAGUeBdqRvBmftwQZ040Gth55',
  access_token_key: '813997496716304384-iOJXY64cfYJLFyyIPhxWSwmA7TQ4XZ1',
  access_token_secret: 'd9IFChkAFa5dtmNVIcsKqT7OICg6C0B5LxyPcijOrMwu6'
});
var url="/search/tweets.json?q="+q+" &count=7";
client.get(url, function(error, tweets, response){
        var arr=[];
        for(var i=0;i<4;i++)
        {
        	arr.push(tweets.statuses[i].text)
        }
        callback(arr);
    });
}