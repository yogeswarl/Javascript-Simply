const express = require('express'),
app = express(),
server  = require('http').Server(app),
io = require('socket.io')(server);
const {v4: uuidv4} = require('uuid');


app.set('view engine', 'ejs')
app.set(express.static('public'));

app.get('/',(req,res) => {
  res.redirect(`/${uuidv4()}`);
})
app.get('/:room',(req,res) => {
  res.render("room", { roomId: req.params.room });
})

io.on('connection', socket => {
  socket.on('join-room',(roomId,userId)=> {
    console.log(roomId,userId)
  })
})
server.listen(3000)
