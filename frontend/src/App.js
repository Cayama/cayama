import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index'
import './App.css';
import HomePageClient from './pages/HomePage/HomePageClient';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomePageClient />
      </Provider>
    </div>
  );
}

export default App;
