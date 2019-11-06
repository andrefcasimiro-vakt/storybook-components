import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './stories/components/Navbar'

const App: React.FC = () => {
  return (
    <>
      <Navbar>
        <section>
            <h2 style={{ marginBottom: 0 }}>Logo</h2>
        </section>

        <ul>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>
                Contact
                <ul>
                <a href='#'>Sublink 1</a>
                <a href='#'>Sublink 1</a>
                </ul>
            </a>
            <a href='#'>Login</a>
        </ul>
      </Navbar>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
