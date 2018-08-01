let socket = io()
socket.on('connect',function(){
  console.log('Connected to server')
  socket.emit('createMessage', {
    from: 'tuan@gmail.com',
    text: 'Hey, this is new message from Tuan',
  })
})

socket.on('disconnect', function(){
  console.log('Disconnected from server')
})

socket.on('newMessage', function(message){
  console.log('newMessage ', message)
})