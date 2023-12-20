import Tvenkinys from "./Components/REACT_LIST/Tvenkinys";
import Jura from "./Components/REACT_LIST/Jura"
import './App.scss'
import Vandenynas from "./Components/REACT_LIST/Vandenynas";
import Pasaulis from "./Components/REACT_LIST/Pasaulis";
import Bala from "./Components/REACT_LIST/Bala";
export default function App() {
  const seaPlaners = [
    { id: 1, type: 'man', name: 'Lina', color: 'blue' },
    { id: 2, type: 'car', name: 'Opel', color: 'red' },
    { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
    { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
    { id: 5, type: 'man', name: 'Tomas', color: 'green' },
    { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
    { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
    { id: 8, type: 'car', name: 'MB', color: 'blue' },
    { id: 9, type: 'car', name: 'ZIL', color: 'red' },
    { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
  ];

  return (
    <div className="App-header">
      <h1>Main Component</h1>
      <Bala item={seaPlaners}/>
      <Tvenkinys seaPlaners={seaPlaners} kazkas={`poriniai`}/>
      <Tvenkinys seaPlaners={seaPlaners} kazkas={`nePoriniai`}/>
      <Jura seaPlaners={seaPlaners} kazkas={'man'}/>
      <Jura seaPlaners={seaPlaners} kazkas={'car'}/>
      <Jura seaPlaners={seaPlaners} kazkas={'animal'}/>
      <Jura seaPlaners={seaPlaners} kazkas={'fish'}/>
      <Vandenynas seaPlaners={seaPlaners} kazkas={'Pagal tipą'}/>
      <Vandenynas seaPlaners={seaPlaners} kazkas={'Pagal vardą'}/>
      <Vandenynas seaPlaners={seaPlaners} kazkas={'Pagal spalvą'}/>
      <Pasaulis seaPlaners={seaPlaners} kazkas={'porinis'}/>
      <Pasaulis seaPlaners={seaPlaners} kazkas={'nePorinis'}/>
    </div>
  );
}