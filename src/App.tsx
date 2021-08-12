import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        {process.env.REACT_APP_HELLO}
      </p>
    </div>
  );
}

export default App;
