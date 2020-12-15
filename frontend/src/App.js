import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index'
import './App.css';
import Routes from './routes';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
