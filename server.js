//Inheriting modules
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});



// Retrieve
var Mongo = require('mongoose').MongoClient;
var urio="mongodb://techhysahil:qwerty@12345@dbh46.mongolab.com:27467/nodeapp";
mongo.connect(uri,function(err,db){
   if(err){
       console.log("not able to connect to database");
       teturn;
   }
});


// Connect to the db
Mongo.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
    if(err) { return console.dir(err); }

    var collection = db.collection('test');
    var doc1 = {'hello':'doc1'};
    var doc2 = {'hello':'doc2'};
    var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

    collection.insert(doc1);

    collection.insert(doc2, {w:1}, function(err, result) {});

    collection.insert(lotsOfDocs, {w:1}, function(err, result) {});

});



http.listen(3000, '127.0.0.1', function(){
  console.log('listening on *:3000');
});
