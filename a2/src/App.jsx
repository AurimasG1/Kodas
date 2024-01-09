import {useState} from 'react';
import './App.css';
import './Buttons.scss';
import './form.scss';
function App() {
  const [animalInput, setAnimalInput] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <h1>REACT AND EXPRESS</h1>
        <input
          type="text"
          placeholder="Enter Animal"
          value={animalInput}
          onChange={e => setAnimalInput(e.target.value)}
        ></input>
        <div className="buttons">
          <button className="green">Submit</button>
          <button className="red" onClick={_ => setAnimalInput('')}>
            CLEAR
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
