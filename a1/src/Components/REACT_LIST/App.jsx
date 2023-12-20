import './App.scss'
import Bala from "./Components/REACT_LIST/Bala";
import Juros from "./Components/REACT_LIST/Juros";
import Vandenynai from "./Components/REACT_LIST/Vandenynai";
import Pasauliai from "./Components/REACT_LIST/Pasauliai";
import Tvenkiniai from "./Components/REACT_LIST/Tvenkiniai";

export default function App() {

  return (
    <div className="App-header">
      <h1>Main Component</h1>
      <Bala/>
      <Tvenkiniai/>
      <Juros/>
      <Vandenynai/>
      <Pasauliai/>
    </div>
  );
}
