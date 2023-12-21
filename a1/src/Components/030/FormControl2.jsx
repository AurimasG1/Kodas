import { useEffect, useState } from 'react';
import './App.scss'
import './Buttons.scss'
import './form.scss'

const animals = ['cat', 'dog', 'fish', 'bird', 'rabbit', 'hamster', 'turtle', 'snake', 'lizard', 'frog', 'chicken', 'duck', 'goat', 'horse', 'cow', 'pig', 'sheep', 'mouse', 'rat', 'guinea pig', 'chinchilla', 'ferret', 'hedgehog', 'gerbil', 'chicken', 'duck', 'goat', 'horse', 'cow', 'pig', 'sheep', 'mouse', 'rat', 'guinea pig', 'chinchilla', 'ferret', 'hedgehog', 'gerbil'];

export default function App() {

  const [singleText, setSingleText] = useState('');
  const [multiText, setMultiText] = useState({
    animal1: '',
    animal2: '',
    animal3: ''
  });
  const [select, setSelect] = useState('');
  const [checkboxes, setCheckboxes] = useState({
    A: false,
    B: true,
    C: false,
    D: false
  });
  const [radios, setRadios] = useState({
    A: false,
    B: true,
    C: false,
    D: false
  });
  const [textarea, setTextarea] = useState('')
  const [range, setRange] = useState(255)
  const [rangeSetter, setRangeSetter] = useState(255)
  const [color, setColor] = useState('#282c34')
  const [backgroundColor, setBackgroundColor] = useState('#282c34')

  useEffect(_ => {
    setBackgroundColor(color + parseInt(range).toString(16));
  }, [color, range]);

  const handleSingleText = e => {
    setSingleText(e.target.value);
  }

  const handleMultiText = e => {
    setMultiText(prev => ({...prev, [e.target.name] : e.target.value}));
  }

  const handleSelect = e => {
    setSelect(e.target.value);
  }

  const handleCheckbox = e => {
    // setCheckboxes(prev => ({...prev, [e.target.name]: e.target.checked }));
    setCheckboxes(prev => ({...prev, [e.target.name] : !prev[e.target.name]})) 
  }

  const handleRadio = e => {
    for (let key in radios) {
     if (key === e.target.name) {
       setRadios(prev => ({...prev, [key]: !prev[key]}))
     } else {
       setRadios(prev => ({...prev, [key]: false}))
     }
    }
   }

  const handleTextarea = e => {
    setTextarea(e.target.value)
  }

  const handleRange = e => {
    setRange(e.target.value)
    setRangeSetter(e.target.value)
  }

  const handlerangeSetter = e => {
    const value = e.target.value ? e.target.value : 0;
    setRangeSetter(value);
    setRange(value);
  }

  const handleColor = e => {
    setColor(e.target.value)
  }

  return (
    <div className="App">
      <header className='App-header' style={{backgroundColor}}>
        <h1>Form Control</h1>
        <div className='form'>
        <input name='username' type='text' placeholder='Name' autoComplete='Name' value={singleText} onChange={handleSingleText}/>

        <input type='text' name='animal1' placeholder='Animal 1' value={multiText.animal1} onChange={handleMultiText}/>
        <input type='text' name='animal2' placeholder='Animal 2' value={multiText.animal2} onChange={handleMultiText}/>
        <input type='text' name='animal3' placeholder='Animal 3' value={multiText.animal3} onChange={handleMultiText}/>

        <select name='select' value={select} onChange={handleSelect}>
          <option value=''>Select</option>
          {
          animals.map((item, index) => <option key={index} value={item}>{item.toUpperCase()}</option>)
          }
          </select>

          <div className='checkboxes'>
            <input type='checkbox' id='A1' name='A'checked={checkboxes.A} onChange={handleCheckbox}/>
            <label htmlFor='A1'>A</label>
            <input type='checkbox' id='B1' name='B'checked={checkboxes.B} onChange={handleCheckbox}/>
            <label htmlFor='B1'>B</label>
            <input type='checkbox' id='C1' name='C'checked={checkboxes.C} onChange={handleCheckbox}/>
            <label htmlFor='C1'>C</label>
            <input type='checkbox' id='D1' name='D'checked={checkboxes.D} onChange={handleCheckbox}/>
            <label htmlFor='D1'>D</label>
          </div>

          <div className='radios'>
            <input type='checkbox' id='A2' name='A'checked={radios.A} onChange={handleRadio}/>
            <label htmlFor='A2'>A</label>
            <input type='checkbox' id='B2' name='B'checked={radios.B} onChange={handleRadio}/>
            <label htmlFor='B2'>B</label>
            <input type='checkbox' id='C2' name='C'checked={radios.C} onChange={handleRadio}/>
            <label htmlFor='C2'>C</label>
            <input type='checkbox' id='D2' name='D'checked={radios.D} onChange={handleRadio}/>
            <label htmlFor='D2'>D</label>
          </div>
        </div>

        <textarea name='textarea' placeholder='Message' value={textarea} onChange={handleTextarea}></textarea>

        <h3 value={range}>{range}</h3>
        <input type='range' min='0' max='255' step='1' value={range} onChange={handleRange}></input>
        <input name='rangeSetterName' type='number' min='0' max='255' value={rangeSetter} onChange={handlerangeSetter}></input>

        <input type='color' value={color} onChange={handleColor}></input>
      </header>
    </div>
  );
}