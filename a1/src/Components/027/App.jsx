import { useState } from 'react';
import './App.scss';
import './Buttons.scss';

export default function App() {

  const [kaka, petras] = useState(0);
  const [kvadratai, jonas] = useState([]);

  const plus = _ => {
    petras(c => c + 1);
    petras(c => c + 1);
    petras(c => c + 1);
  }
  const reset = _ => {
    console.log(`reset ${kaka}`)
   petras(0);
   
  }
  const pridetiKvadrata = _ => {
    jonas(s => [...s, '']);
  }
  const resetKvadratai = _ => {
    jonas([])
  }
    return (
        <div className="App">
            <header className="App-header">
                <h1>This is STATE</h1>
                <h2>{kaka}</h2>{console.log(`${kaka}`)}
                <button className="button-64" role="button"><span className="text" onClick={plus}>+</span></button>
                <button className="button-64" role="button"><span className="text" onClick={reset}>0</span></button>
                <div className='kvadratai'>
                  {
                    kvadratai.map((kvadratas, i) => <div className='kvadratas' key={i}>{kvadratas}</div>)
                  }
                </div>
                <button className='button-64' role='button'><span className='text' onClick={pridetiKvadrata}>Prideti kvadarata</span></button>
                <button className='button-64' role='button'><span className='text' onClick={resetKvadratai}>Reset kvadratus</span></button>
            </header>
        </div>
    );
}