import './App.scss';
// import Du from './Components/React_Base_list_/Du';
// import Vienas from './Components/React_Base_list_/Vienas';
// import DogCircles from './Components/React_Base_list_/DogCircles';


function App() {
  const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
  const dogsSuIlgiu = dogs.map((item, i) => ({name: item, length: item.length, index: i + 1 }))
  const dogsNuoIlgiausio = () => { return dogsSuIlgiu.sort((a, b) => b.length - a.length)}
  const dogsNuoTrumpiausio = () => { return dogsSuIlgiu.sort((a, b) => a.length - b.length)}

    // const randomColor = _ => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return (
        <div className="App">
            <header className="App-header">
                <h5>PIRMAS</h5>
                <div className='kvadratai'>
                  {
                  dogs.map((dogs, i) => <div className='kvadratas' key={i}>{dogs}</div>)
                  }
                </div>
                <h5>ANTRAS</h5>
                <div className='apskritimai'>
                  {
                  dogsNuoIlgiausio(dogs).map((item, i) => {
                    return (
                      <div key={i} className='apskritimas'>
                        {item.index} {item.name}
                      </div>
                    )
                  }) 
                  }
                </div>
                <h5>TRECIAS</h5>
                <div className='apskritimai kvadratai'>
                  {
                    dogs.map((item, index) => index % 2 === 0 ? <div className='apskritimas' key={index}>{item}</div> : <div className='kvadratas' key={index}>{item}</div>)
                  }
                </div>
                <h5>KETVIRTAS</h5>
                <div className='apskritimai'>
                  {dogsNuoTrumpiausio(dogs).map((item, i) => { 
                    const backgroundColor = item.length > 6 ? 'green' : 'red';

                    const circleStyle = {
                    background: backgroundColor,
                    };

                  return (
                    <div key={i} className='apskritimas' style={circleStyle}>
                      {item.index}. {item.name} ({item.length} simboliai)
                    </div>
                  );
                })}
                </div>
                <h5>PENKTAS</h5>
                <div className='apskritimai'>
                  {
                    dogs.map((item, i) => item[0] === item[0].toUpperCase() ? null : <div key={i} className='apskritimas'>{item}</div>)
                  }
                </div>
            </header>
        </div>
    );
}

export default App;