import './App.css';
import LabasZuiki from './Components/REACT_BASE/LabasZuiki';
import SuDuProps from './Components/REACT_BASE/SuDuProps';
import TrisProps from './Components/REACT_BASE/TrisProps';
import VienasProps from './Components/REACT_BASE/VienasProps';
import ZebraiIrBebrai from './Components/REACT_BASE/ZebraiIrBebrai';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <LabasZuiki color={'pink'}></LabasZuiki>   
        <VienasProps tekstas={'Bet koks tekstas propsas'}></VienasProps>
        <ZebraiIrBebrai spalva={0 ? {color: 'blue'} : {color: 'red'}}/>
        <SuDuProps betkoksh1={'Bet koks SuDuProps tekstas1'} betkoksh2={'Bet koks SuDuProps tekstas2'}></SuDuProps>
        <TrisProps pirmas={'Betkoks TrisProps tekstas1'} antras={'Betkoks TrisProps tekstas2'} spalva={{color: 'pink'}}></TrisProps>
      </header>
    </div>
  );
}

export default App;
