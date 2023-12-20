import React, { useEffect } from 'react';
import './App.scss'
import './Buttons.scss';
import { useState } from 'react'
import Sq from './Components/028/Sq';
import randomColor from './Funkcijos/randomColor'
import { v4 as uuidv4 } from 'uuid';
import BigSq1 from './Components/028/BigSq1';
import BigSq2 from './Components/028/BigSq2';

export default function App() {

  
  const [sq1, setSq1] = useState('#444444');
  const [sq2, setSq2] = useState('#444444');
  const [squares, setSquares] = useState([]);
  const [sync, setSync] = useState(false);

  useEffect(_ => {
    console.log('Squares are changed');
    if (sync) {
      setSquares(item => item.map(item => ({...item, show: true})));
      setSync(false);
    }
  }, [squares])

  const add = _ => {
    setSquares(item => [...item, {
      color: randomColor(),
      id: uuidv4(),
      show: true,
    }
    ]);
  }
  const reset = _ => {
    setSquares(item => item.map(item => ({...item, show: false}), []));
  }

  const syncSpin = _ => {
    setSquares(item => item.map(item => ({...item, show: false})))
    setSync(true);
  }

  return (
    <div className="App">
    <header className="App-header">
      <h1>This is STATE part II</h1>
      <div className='squares'>
        {
          squares.map((item, i) => item.show ? <Sq setSquares={setSquares} square={item} key={i}/> : null)
        }
      </div>
      <div className='buttons'>
        <button className='yellow' onClick={add}>ADD SQUARE</button>
        <button className='red' onClick={reset}>RESET</button>
        <button className='green' onClick={_ => setSquares(squaresState => squaresState.map(item => ({...item, show: true})))}>*</button>
        <button className='black' onClick={syncSpin}>sync</button>
      </div>
      <div className='squares'>
        <BigSq1 sq1={sq1} setSq1={setSq2}/>
        <BigSq2 sq2={sq2} setSq2={setSq1}/>
      </div>
      </header>
    </div>
  );
}
