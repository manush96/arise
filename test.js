

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'CsvHjpRXSPNBBRy5po7ZIDHRn',
  consumer_secret: 'yMQ1t6TPPiFpTpDdYtaghx6hNbAGUeBdqRvBmftwQZ040Gth55',
  access_token_key: '813997496716304384-iOJXY64cfYJLFyyIPhxWSwmA7TQ4XZ1',
  access_token_secret: 'd9IFChkAFa5dtmNVIcsKqT7OICg6C0B5LxyPcijOrMwu6'
});
var query="ARISE,AWAKE RASHMI BANSAL";

var url="/search/tweets.json?q=question&count=4";
client.get(url, function(error, tweets, response){
        if (error) throw error;
        var arr=[];
        console.log(tweets);
        for(var i=0;i<4;i++)
        {
        	arr.push(tweets.statuses[i].text)
        }
        console.log("herre")
        console.log(arr+"ehtwitterSearchClient.search");
    });