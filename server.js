var fs = require("fs")
var express = require('express')
var app = express()

var fs = require('fs') ;
var html = (fs.readFileSync('timestamp.html').toString())
//var ndate = "Dec 25, 1995"

//var udate = Date.parse("Dec 25, 1995").toString()
    app.get('/',function (req, res) {
     res.send(html)
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
  //console.log("HTML file contents: "+ html)
})
