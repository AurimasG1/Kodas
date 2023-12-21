import { useEffect, useState } from 'react';
import './App.scss'
import './Buttons.scss'
import './form.scss'
import rand from './Funkcijos/rand'

export default function App() {

  const [divas, setDivas] = useState('circle');
  const [divas2, setDivas2] = useState('circle');
  const [randomins, setRandomins] = useState()
  
  const keisti1 = _ => {
    setDivas(c => c === 'circle'? 'square' : 'circle')
  }

  const keisti2 = _ => {
    setDivas2(c => c === 'circle' ? 'square' : 'circle')
  }

  const randomint = _ => {
    setRandomins(_ => rand(5, 25))
  }


  return (
    <div className="App">
      <header className='App-header'>

        <div className='circles'>
        <div className={divas}></div>
        </div>
        <button onClick={keisti1} className='red'>Keisti</button>

        <div className='circles'>
          <div className={divas2}>{randomins}</div>
          <button onClick={keisti2} className='red'>Keisti2</button>
          <button onClick={randomint} className='red'>Randomint</button>

        </div>
      </header>
    </div>
  );
}
