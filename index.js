var fs = require("fs")
var express = require('express')
var app = express()
var http = require('http')
var request = require('request')
var path = require('path')
const url = require('url')
var moment = require('moment')

var fs = require("fs")
var html = (fs.readFileSync('timestamp.html').toString())

  app.get('/string/:Natural/',function (req, res) {
    var data = req.params
    var ncheck = data.Natural
    var unix = Date.parse(ncheck).toString()
    if(moment(ncheck, "MMMM D, YYYY", true).isValid()==false){
      res.send('{"Natural: '+"Null"+'"'+","+' "Unix: '+"Null"+'"}')
    }
    else
    res.send('{"Natural: '+data.Natural+'"'+","+' "Unix: '+unix+'"}')
})
  
  app.get('/unix/:Unix/',function (req, res) {
    var data = req.params
    var unix = data.Unix/1000;
    var string = moment.unix(unix).format("LL")
    if(isNaN(data.Unix)==true){
      res.send('{"Natural: '+"Null"+'"'+","+' "Unix: '+"Null"+'"}')
    }
    else
    res.send('{"Natural: '+string+'"'+","+' "Unix: '+data.Unix+'"}')
})
  
  app.get('/',function (req, res) {
     res.send(html)
})

app.listen(5000, function () {
  console.log("Timestamp app running on port 5000...")
})
