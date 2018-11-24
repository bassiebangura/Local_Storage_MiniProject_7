var express = require('express');
var path = require('path');
var app = express();
var rootpath = path.normalize(__dirname + '/');

app.use(express.static(rootpath));
app.listen(8000, function(err) {
  if (err) console.error(err);
  console.log('server running');
})
