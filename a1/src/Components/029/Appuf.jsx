import { useState } from 'react';
import './App.scss'
import './Buttons.scss'
import { useEffect } from 'react';
import ColorCircle from './Components/029/ColorCircle';
import randomColor from './Funkcijos/randomColor'
import { useCallback } from 'react'

export default function App() {

  const [counterYellow, setCounterYellow] = useState(0);
  const [counterRed, setCounterRed] = useState(0);
  const [circleColor, setCircleColor] = useState('#77777777');

  const countYellow = _ => {
    setCounterYellow(c => c + 1);
    // changeColor();
  }

  const countRed = _ => {
    setCounterRed(c => c + 1);
    // changeColor();
  }

  // const changeColor = _ => {
  //   setCircleColor(randomColor());
  // }
  
  const changeColor = useCallback(_ => {
    setCircleColor(randomColor());
  }, [setCircleColor]);

  useEffect(_ => {
    console.log('useEffect');
    changeColor();
  }, [changeColor, counterRed, counterYellow]);

  const clickBlack = ka => 
      console.log(ka + ' clickBlack')

  return (
    <div className="App">
      <header className='App-header'>
        <h1>This is STATE and UseEffect</h1>
        <ColorCircle color={circleColor} />
        <div className='buttons'>
          <button className='yellow' onClick={countYellow}>{counterYellow}</button>
          <button className='red' onClick={countRed}>{counterRed}</button>
          <button className='black' onClick={_ => clickBlack('ka ka')}>CLICK</button>
        </div>
      </header>
    </div>
  );
}