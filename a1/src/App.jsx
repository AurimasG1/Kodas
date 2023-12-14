import './App.scss';
import Du from './Components/React_Base_list_/Du';
import Vienas from './Components/React_Base_list_/Vienas';


function App() {
 const dogs = [
  'Big Cow',
  'Small Cow',
  'Big Pig',
  'Small Pig',
  'Angry Chicken',
  'Happy Chicken',
  'Big Sheep',
  'Bad Sheep',
  'Big Goat',
  'White Goat',
  'Black Goat',
  'Tiny Goat',
  'Techno Chicken',
  'Big Dog',
  'Big Horse',
  'Small Horse',
  'Big Duck',
  'Small Duck',
  'Big Turkey',
  'Very Big Turkey',
  'Small Turkey'
 ]

 const sortinimas = function (masyvas) {
 return masyvas.sort((a, b) => {
    if (a.length < b.length) {
      return 1;
    }
    if (a.length > b.length) {
      return -1;
    }
    return 0;
  });
 }
    // const randomColor = _ => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return (
        <div className="App">
            <header className="App-header">
                <h1>LISTS</h1>
                <div className='kvadratai'>
                  {
                  dogs.map((dogs, i) => <Vienas key={i} betKas={dogs}/>)
                  }
                </div>
                <div className='apskritimai'>
                  {
                     sortinimas(dogs).map((kaka, i) => <Du key={i} kazkas={kaka}/>)
                  }
                </div>
            </header>
        </div>
    );
}

export default App;