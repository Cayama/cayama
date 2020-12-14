export const SOCKET_REDUX = 'SOCKET_REDUX';

export const socketToReduxAction = (socket) => ({
  type: SOCKET_REDUX,
  socket,
});
