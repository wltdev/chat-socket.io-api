import { Server } from 'socket.io'

import { app } from './app'

const appServer = app.listen(3333)

const io = new Server(appServer, {
  cors: {
    origin: '*',
    credentials: true
  }
})

global.onlineUsers = new Map()

io.on('connection', (socket) => {
  global.chatSocket = socket

  socket.on('add-user', (userId) => {
    global.onlineUsers.set(userId, socket.id)
  })

  socket.on('send-message', (data) => {
    console.log(data)
    const sendUserSocket = global.onlineUsers.get(data.receiverId)
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('message-recieve', data)
    }
  })

  socket.on('set-message-read', (data) => {
    const sendUserSocket = global.onlineUsers.get(data.otherUser)
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('message-read', { ...data, read: true })
    }
  })

  socket.on('set-all-messages-read', (data) => {
    const sendUserSocket = global.onlineUsers.get(data.otherUser)
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('all-messages-read', { ...data })
    }
  })
})
