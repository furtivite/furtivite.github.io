import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const aboutMe: string[] = [
    'Привет, меня зовут Егор',
    'Работаю как разработчик интерфейсов в СберКорусе и помогаю проекту doka.guide',
    'Пишу на JS/TS, пользуюсь 11ty, Angular и React',
    'Хочу больше узнать про React, Storybook и Jest'
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {aboutMe.map((item, index) => (
          <p key={index}>
            {item}
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
