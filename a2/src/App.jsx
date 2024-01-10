import {useEffect, useState} from 'react';
import './App.css';
import './Buttons.scss';
import './form.scss';
import axios from 'axios';

const URL = 'http://localhost:3001/animals';
function App() {
  const [animalInput, setAnimalInput] = useState('');
  const [animalEditInput, setAnimalEditInput] = useState('');
  const [animals, setAnimals] = useState(null);
  const [storeAnimals, setStoreAnimals] = useState(null);
  const [updateAnimals, setUpdateAnimals] = useState(null);
  const [destroyAnimal, setDestroyAnimal] = useState(null);
  const [editStatus, setEditStatus] = useState(null);

  useEffect(_ => {
    axios
      .get(URL)
      .then(res => setAnimals(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(
    _ => {
      setAnimalEditInput(
        animals?.find(animal => animal.id === editStatus)?.name || ''
      );
    },
    [editStatus]
  );

  useEffect(
    _ => {
      if (null !== storeAnimals) {
        axios.post(URL, storeAnimals).then(res => {
          setAnimals([{name: storeAnimals.name, id: res.data.id}, ...animals]);
          setAnimalInput('');
        });
      }
    },
    [storeAnimals]
  );

  useEffect(
    _ => {
      if (null !== destroyAnimal) {
        axios
          .delete(`${URL}/${destroyAnimal.id}`)
          .then(_ => {
            setAnimals(
              animals.filter(animal => animal.id !== destroyAnimal.id)
            );
          })
          .catch(err => console.log(err));
      }
    },
    [destroyAnimal]
  );

  useEffect(_ => {
    if (null !== updateAnimals) {
      axios.put(`${URL}/${updateAnimals.id}`, updateAnimals).then(_ => {
        setAnimals(
          animals.map(animal =>
            animal.id === updateAnimals.id
              ? {...animal, name: updateAnimals.name}
              : animal
          )
        );
        setEditStatus(null);
      });
    }
  });

  const submit = _ => {
    setStoreAnimals({name: animalInput});
  };

  const change = animal => {
    if (null === editStatus || editStatus !== animal.id) {
      setEditStatus(animal.id);
    } else {
      setUpdateAnimals({name: animalEditInput, id: animal.id});
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React and Express full of Animals</h1>
        {animals &&
          animals.length !== 0 &&
          animals.map(animal => (
            <div key={animal.id} className="animal-line">
              <h3
                style={{display: editStatus === animal.id ? 'none' : 'block'}}
              >
                {animal.name}
              </h3>
              <div
                className="form animal-edit"
                style={{
                  width: '200px',
                  display: editStatus === animal.id ? 'block' : 'none',
                }}
              >
                <input
                  type="text"
                  value={animalEditInput}
                  onChange={e => setAnimalEditInput(e.target.value)}
                ></input>
              </div>
              <div>
                <button className="red" onClick={_ => setDestroyAnimal(animal)}>
                  Let go free animal
                </button>
                <button
                  className="green"
                  onClick={_ => setEditStatus(animal.id)}
                >
                  {editStatus === animal.id ? 'Submit' : 'Change'}
                </button>
              </div>
            </div>
          ))}
        {animals && !animals.length && <p>No Animals found</p>}
        {!animals && <p>Animals is loading...</p>}
        <input
          type="text"
          placeholder="Enter Animal"
          value={animalInput}
          onChange={e => setAnimalInput(e.target.value)}
        ></input>
        <div className="buttons">
          <button className="green" onClick={submit}>
            Submit
          </button>
          <button className="red" onClick={_ => setAnimalInput('')}>
            CLEAR
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
