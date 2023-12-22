import { useState } from 'react';
import './App.scss'
import './Buttons.scss'
import './form.scss'
import rand from './Funkcijos/rand'

export default function App() {

  const [divas, setDivas] = useState('circle');
  const [divas2, setDivas2] = useState('circle');
  const [randomins, setRandomins] = useState();
  const [skaicius, setSkaicius] = useState(0);
  const [squares, setSquares] = useState([]);
  const [squares2, setSquares2] = useState([]);
  
  const keisti1 = _ => {
    setDivas(c => c === 'circle'? 'square' : 'circle')
  }

  const keisti2 = _ => {
    setDivas2(c => c === 'circle' ? 'square' : 'circle')
  }

  const randomint = _ => {
    setRandomins(_ => rand(5, 25))
  }

  const prideti1skaicius = _ => {
    setSkaicius(c => c + 1)
  }

  const atimnti3skaicius = _ => {
    setSkaicius(c => c - 3)
  }

  const addSquare = _ => {
    setSquares(s => [...s, '#0000ff']);
  }

  const resetSquares = _ => {
    setSquares([]);
  }

  const addRedSquare2 = _ => {
    setSquares2(s => [...s, '#ff0000'])
  }

  const addBlueSquare2 = _ => {
    setSquares2(s => [...s, '#0000ff'])
  }

  const resetRedBlueSquares = _ => {
    setSquares2([])
  }


  return (
    <div className="App">
      <header className='App-header'>

        <div className='circles'>
        <div className={divas}></div>
        <button onClick={keisti1} className='red'>Keisti</button>
        </div>
        

        <div className='circles'>
          <div className={divas2}>{randomins}</div>
          <button onClick={keisti2} className='red'>Keisti2</button>
          <button onClick={randomint} className='red'>Randomint</button>
        </div>

        <div>
          <div>{skaicius}</div>
          <div className='buttons'>
          <button onClick={prideti1skaicius} className='red'>Plus</button>
          <button onClick={atimnti3skaicius} className='red'>Minus</button>
          </div>
        </div>

        <div className='squares'>
          {
            squares.map((item, i) => <div className='square' style={{backgroundColor: item}} key={i}>{item}</div>)
          }
          <div className='buttons'>
          <button onClick={addSquare} className='red'>Pridėti kvadratą</button>
          <button onClick={resetSquares} className='red'>RESET</button>
          </div>
          </div>
          <div className='squares'>
          {
            squares2.map((item, i) => <div className='square' style={{
              backgroundColor: item + '20',
              border: '2px dotted white'
            }} key={i}>{item}</div>) 
          }
          <div className='buttons'>
          <button onClick={addRedSquare2} className='red'>Pridėti raudoną kvadratą</button>
          <button onClick={addBlueSquare2} className='red'>Pridėti mėlyną kvadratą</button>
          <button onClick={resetRedBlueSquares} className='red'>RESET</button>
          </div>
        </div>
      </header>
    </div>
  );
}
