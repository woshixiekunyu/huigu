//引入http模块
var http = require('http');

var ioSocket = require('socket.io');

var server = http.createServer(function(req,res){
	res.end('start')
})
var io = ioSocket(server);

io.on('connection',function(socket){
	socket.on('message',function(data){
		console.log(data)
		io.emit('backdata',data)
		
	})
})

server.listen(8989)
console.log('开启成功')
