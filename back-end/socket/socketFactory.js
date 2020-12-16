const socketIo = require('socket.io');
const { notificationExample } = require('./index');

const onConnection = (socket, io) => {
  socket.on('notificationExample', notificationExample(socket, io));
};

module.exports = (httpServer) => {
  const io = socketIo(httpServer, { origins: '*:*' });

  io.on('connection', (socket) => onConnection(socket, io));

  return { io };
};
