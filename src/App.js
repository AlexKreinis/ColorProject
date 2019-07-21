import React from 'react';
import './App.css';
import Palette from './components/Palette.js';
import seedColors from './defaultColors/seedColors.js';

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
