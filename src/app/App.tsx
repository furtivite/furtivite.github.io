import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Привет, меня зовут Егор. Я&nbsp;&mdash; разработчик интерфейсов.
          <br />
          Пишу на React, Angular с TypeScript. Хочу разобраться с React получше.
          <br />
          Контакт{' '}
          <a href="http://t.me/antytoto" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
            @antytoto
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
