var leboncoin = function (callback) {
    var http = require('http')
    var bl = require('bl')
    var request=require("request");
 request('https://www.googleapis.com/books/v1/volumes?q=harry potter', function (err,response,body) {
        response.pipe(bl(function (err, data) {
            if (err) {
                callback(err);
                return;
            }
            var data = data.toString()
            var description = body;

            callback(description);
        }))
    })
}

exports.leboncoin = leboncoin;