import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import socketIo from 'socket.io-client';
import Routers from './Routers/index';
import { socketToReduxAction } from './Redux/action/socketToReduxAction';
import './App.css';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const socket = socketIo('http://localhost:3001', { transports: ['websocket'] });
    dispatch(socketToReduxAction(socket));
  }, [dispatch]);

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
