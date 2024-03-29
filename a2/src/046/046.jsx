import { useReducer, useState } from 'react';
import './form.scss'
import './buttons.scss'
import './App.scss'
import counterReducer from './counterReducer';

export default function App() {

    const [counter1, setCounter1] = useState(0);
    const [input1, setInput1] = useState(0)

    const [counter2, dispatchCounter2] = useReducer(counterReducer, 0)

    const plus = _ => dispatchCounter2({ type: 'add_1' });

    const minus = _ => dispatchCounter2({ type: 'rem_1' });

    const reset = _ => dispatchCounter2({ type: 'set_0' });

    const add = _ => {
        const value = parseInt(input1);
        let action;
        if (isNaN(value)) {
            action = {
                type: 'error'
            }
        }
        else {
            action = {
                type: 'add',
                payload: value
            };
        }
        dispatchCounter2(action);
        setInput1(0);
    }


    return (
        <div className='App'>
            <header className='App-header'>
                <h1>USE STATE: {counter1}</h1>
                <h1>USE REDUCER: {counter2}</h1>
                <div className='buttons'>
                    <button className='black' onClick={_ => setCounter1(c => c + 1)}>+</button>
                    <button className='black' onClick={_ => setCounter1(c => c - 1)}>-</button>
                    <button className='black' onClick={_ => setCounter1(0)}>0</button>
                    <button className='black' onClick={plus}>+</button>
                    <button className='black' onClick={minus}>-</button>
                    <button className='black' onClick={reset}>0</button>
                    <div className='form small'>
                        <input type='text' className='small-white' value={input1} onChange={e => setInput1(e.target.value)}></input>
                    </div>
                    <button className='green' onClick={add}>ADD</button>



                </div>
            </header>
        </div>
    );
}