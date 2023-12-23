import { useState } from 'react';
import './App.scss'
import './Buttons.scss'
import './form.scss'
import Sq from './Components/State2/Sq';
import randomColor from './Funkcijos/randomColor'

export default function App() {

  const [squares, setSquares] = useState([]);
  const [squaresInside, setSquaresInside] = useState([]);
  const [squaresInside2, setSquaresInside2] = useState([]);
  const [squaresInside3, setSquaresInside3] = useState([]);

  const createSquare = _ => {
    setSquares(s => [...s, randomColor()])
  }

  const pridetiAzuola = _ => {
    setSquaresInside(s => [...s, 'ažuolas'])
  }

  const pridetiBerza = _ => {
    setSquaresInside2(s => [...s, 'beržas'])
  }

  const pridetiUosi = _ => {
    setSquaresInside3(s => [...s, 'uosis'])
  }


  return (
    <div className="App">
      <header className='App-header'>
      <div className='squares'>
        {
          squares.map((s, i) => <Sq square={s} key={i}/>)
        }
      </div>
      <div className='buttons'>
        <button onClick={createSquare} className='yellow'>Sukurti kvadratą</button>
        <button onClick={_=> setSquares([])} className='yellow'>Ištrinti visus</button>

      </div>
      <div className='staciakampis' style={{
        backgroundColor: 'green'
      }}>
        <div className='staciakampioVidus1'>
          {
            squaresInside.map((s, i) => <div className='mazasviduje' key={i}>{s}</div>)
          }
        </div>
        <div className='staciakampioVidus1'>
          {
            squaresInside2.map((s, i) => <div className='mazasviduje' key={i}>{s}</div>)
          }
        </div>
        <div className='staciakampioVidus1'>
          {
            squaresInside3.map((s, i) => <div className='mazasviduje' key={i}>{s}</div>)
          }
        </div>
      </div>
      <div className='buttons'>
        <button className='black' onClick={pridetiAzuola}>ąžuolas</button>
        <button className='green' onClick={pridetiBerza}>beržas</button>
        <button className='yellow' onClick={pridetiUosi}>uosis</button>
      </div>
      </header>
    </div>
  );
}
