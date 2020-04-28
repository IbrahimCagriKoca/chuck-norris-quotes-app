import React from 'react';
import './App.css';
import ChuckNorrisGenerator from './ChuckNorrisGenerator';
import ChuckNorrisSearch from './ChuckNorrisSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChuckNorrisGenerator />
        <ChuckNorrisSearch />
      </header>
    </div>
  );
}

export default App;
