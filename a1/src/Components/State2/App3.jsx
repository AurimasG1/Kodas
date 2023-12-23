import React, { useState } from 'react';
import './App.scss'
import './Buttons.scss'
import './form.scss'

export default function App() {

  const [skaicius, setSkaicius] = useState(0);

  const prideti = _ => {
    setSkaicius(s => s + 1)
  }
  return (
    <div className="App">
      <header className='App-header'>
        <div>{skaicius}</div>
        <button onClick={prideti}>+</button>

      </header>
    </div>
  );
}
