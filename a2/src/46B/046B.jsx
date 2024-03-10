import { useReducer, useState } from 'react';
import './form.scss'
import './buttons.scss'
import './App.scss'
import counterReducer from '../Reducers/counterMasterReducer';
import * as a from '../Actions/counterActions';

export default function App() {

    const [input1, setInput1] = useState('')

    const [counter, dispatchCounter] = useReducer(counterReducer, { number: 0, error: '' })

    const add = _ => {
        const value = parseInt(input1);
        if (isNaN(value)) {
            dispatchCounter(a.error('Please enter a number'));
        }
        else {
            dispatchCounter(a.add(value))
        }
        setInput1('')

    }

    return (
        <div className='App'>
            <header className='App-header'>
                <h1>USE REDUCER: {counter.number}</h1>
                {counter.error && <h2 style={{ color: 'crimson' }}>{counter.error}</h2>}
                <div className='buttons'>
                    <button className='black' onClick={_ => dispatchCounter(a.add1())}>+</button>
                    <button className='black' onClick={_ => dispatchCounter(a.rem1())}>-</button>
                    <button className='black' onClick={_ => dispatchCounter(a.set0())}>0</button>
                    <div className='form small'>
                        <input type='text' className='small-white' placeholder='Number' value={input1} onChange={e => setInput1(e.target.value)}></input>
                    </div>
                    <button className='black' onClick={add}>ADD</button>



                </div>
            </header>
        </div >
    );
}