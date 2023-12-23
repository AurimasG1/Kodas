import React, { useState } from 'react';
import './App.scss'
import './Buttons.scss'
import './form.scss'
import Square from './Components/State2/Square';

export default function App() {

  const [kvadratai, setKvadratai] = useState([]);

  const prideti = _ => {
    setKvadratai(s => [...s, 0])
  }

  const padidintiVienetu = (_) => {
    const naujiVienetai = [...kvadratai];
    naujiVienetai[_] += 1;
    setKvadratai(naujiVienetai)
  }

  return (
    <div className="App">
      <header className='App-header'>
        <button onClick={prideti}>Pridėti</button>
        <div className='square-container'>
          {
            kvadratai.map((item, i) => (
              <Square key={i} kvadratas={item} didinti1={_=> padidintiVienetu(i)}></Square>
            ))          
          }
        </div>
      </header>
    </div>
  );
}
