var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(process.env.PORT, function(){ // 3000 was parameter 1
  console.log('listening on *:3000');
});


// npm install --save socket.io

// npm install --save express@4.15.2