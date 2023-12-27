import React, {useEffect, useState} from 'react';
import './App.scss';
import './Buttons.scss';
import './form.scss';

export default function App() {
  useEffect(_ => {
    const animals = JSON.parse(localStorage.getItem('animals'));

    getCat();
    getDog();
    getBird();
    if (null === animals) {
      return;
    }
    setCat(animals.cat);
    setDog(animals.dog);
    setBird(animals.bird);
  }, []);

  const [skaicius, setSkaicius] = useState(0);
  const [cat, setCat] = useState('');
  const [dog, setDog] = useState('');
  const [bird, setBird] = useState('');

  const prideti = _ => {
    setSkaicius(s => s + 1);
  };

  const saveCat = _ => {
    localStorage.setItem('cat', cat);
  };

  const removeCat = _ => {
    localStorage.removeItem('cat');
  };

  const saveDog = _ => {
    localStorage.setItem('dog', dog);
  };

  const removeDog = _ => {
    localStorage.removeItem('dog');
  };

  const saveBird = _ => {
    localStorage.setItem('bird', bird);
  };

  const removeBird = _ => {
    localStorage.removeItem('bird');
  };

  const addAll = _ => {
    localStorage.setItem('animals', JSON.stringify({cat, dog, bird}));
  };

  const clear = _ => {
    localStorage.clear();
  };

  const getCat = _ => {
    setCat(localStorage.getItem('cat'));
  };

  const getDog = _ => {
    setDog(localStorage.getItem('dog'));
  };
  const getBird = _ => {
    setBird(localStorage.getItem('bird'));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is Local Storage</h1>
        <div>{skaicius}</div>
        <button onClick={prideti}>+</button>

        <div className="form">
          <label>Cat</label>
          <input
            type="text"
            name="cat"
            value={cat}
            onChange={e => setCat(e.target.value)}
          ></input>
          <label>Dog</label>
          <input
            type="text"
            a
            name="dog"
            value={dog}
            onChange={e => setDog(e.target.value)}
          ></input>
          <label>Bird</label>
          <input
            type="text"
            name="bird"
            value={bird}
            onChange={e => setBird(e.target.value)}
          ></input>
          <input type="text" name="name"></input>
        </div>
        <div className="buttons">
          <button className="black" onClick={saveCat}>
            Save cat
          </button>
          <button className="red" onClick={removeCat}>
            Remove Cat
          </button>
          <button className="yellow" onClick={getCat}>
            Get Cat
          </button>
          <button className="black" onClick={saveDog}>
            Save dog
          </button>
          <button className="red" onClick={removeDog}>
            Remove dog
          </button>
          <button className="yellow" onClick={getDog}>
            Get Dog
          </button>
          <button className="black" onClick={saveBird}>
            Save bird
          </button>
          <button className="red" onClick={removeBird}>
            Remove bird
          </button>
          <button className="yellow" onClick={getBird}>
            Get Bird
          </button>
          <button className="white" onClick={addAll}>
            Add All
          </button>
          <button className="red" onClick={clear}>
            Clear
          </button>
        </div>
      </header>
    </div>
  );
}
