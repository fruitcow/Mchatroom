var express= require('express');
var http = require('http');
var path = require('path');

var io = require('socket.io');
var app = express();
app.configure(function(){
	
app.use(express.static(path.join(__dirname,'./public')));
});
var server =http.createServer(app);


io=io.listen(server);
server.listen(3000);
console.log('start WebServer\n');


io.sockets.on('connection',function(socket){
	
	var name ;
	
	console.log('A Browser Has Connected');//當有Brwoser 連線時 SERVER 會顯示 A Browser Has Connected
    //socket.emit('hello','Welcome to Server');
	socket.on('message',function(data){//收到Brwoser 傳的信息會廣播給其他使用者
		
		console.log(data);
		name =data.name;
		socket.broadcast.emit('message',data);
		
	});
	socket.on('disconnect',function(){
	
	
	socket.broadcast.emit('logout',name);//廣播下線訊息
	
	
	
});
	socket.broadcast.emit('login');
	
});

	
	
	
	
	
	
	
	