import React from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="page-container">
      <NavBar />
      <main>
        <Home></Home>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
