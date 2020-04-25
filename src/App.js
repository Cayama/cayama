import React from 'react';
import './App.css';
import Header from './components/Header';
import arrCategories from './data';

function App() {
  return (
    <div>
      <Header arrCategories={arrCategories} />
    </div>
  );
}

export default App;
