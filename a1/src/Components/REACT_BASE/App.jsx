import './App.css';
import LabasZuiki from './Components/REACT_BASE/LabasZuiki';
import SuDuProps from './Components/REACT_BASE/SuDuProps';
import TrisProps from './Components/REACT_BASE/TrisProps';
import VienasProps from './Components/REACT_BASE/VienasProps';
import ZebraiIrBebrai from './Components/REACT_BASE/ZebraiIrBebrai';

function App() {

  const randomColor = _ => '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
  
  return (
    <div className="App">
      <header className="App-header">
        <LabasZuiki color={'pink'}></LabasZuiki>
        <VienasProps tekstas={'Bet koks tekstas propsas'} randomColor={randomColor}/>
        <ZebraiIrBebrai spalva={0 ? {color: 'blue'} : {color: 'red'}}/>
        <SuDuProps betkoksh1={'Bet koks SuDuProps tekstas1'} betkoksh2={'Bet koks SuDuProps tekstas2'}/>
        <TrisProps pirmas={'Betkoks TrisProps tekstas1'} antras={'Betkoks TrisProps tekstas2'} spalva={{color: 'pink'}}/>
      </header>
    </div>
  );
}

export default App;
