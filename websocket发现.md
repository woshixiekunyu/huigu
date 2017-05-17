在进行多页面数据同步时，突然少了sockets也是可以的
var io = ioSocket(server);

io.on('connection',function(socket){
	socket.on('message',function(data){
		console.log(data)
		io.emit('backdata',data)
		
	})
})
可以看出，第7行的io.emit('backdata',data)少了个sockets,原本应该为io.sockets.emit('backdata',data)
但是这样子却也可以
