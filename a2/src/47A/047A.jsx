import './form.scss'
import './buttons.scss'
import './App.scss'
import UseLocalStorage from '../Hooks/UseLocalStorage';




export default function App() {

    const [racoons, setRacoons, meskenai, setMeskenai] = UseLocalStorage('racoons', 'meskenai', 0)

    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Custom Hook</h1>
                <h2>Now we have {racoons} Racoons</h2>
                <h2>Now we have {meskenai} Meskenai</h2>
                <div className='buttons'>
                    <button className='green' onClick={_ => setRacoons(r => r + 1)}>+</button>
                    <button className='green' onClick={_ => setMeskenai(m => m + 1)}>+</button>
                </div>
            </header>
        </div >
    );
}