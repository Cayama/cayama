import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage/HomePage';
import store from './store/index'
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
