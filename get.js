var http = require('http')
var https = require('https')
 
var url = 'https://timestamp-api-projejec-callmekurisu.c9users.io/'
var prefix = url.substring(0,8)
 
if (prefix === 'https://'){
  https.get(url, function (response) {
    response.on('data', function (data) {
      console.log(data.toString());
    })
  })
} else {
  http.get(url, function (response) {
    response.on('data', function (data) {
      
      console.log(data.toString());
    })
  })
}