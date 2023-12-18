import './App.scss';
import React from 'react';

export default function App() {
  const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

  const sortinimas = function (bilekas) {
    return bilekas.sort((a, b) => {
       if (a.length < b.length) {
         return 1;
       }
       if (a.length > b.length) {
         return -1;
       }
       return 0;
     })
    }
  const DogCircle = ({name, length, index}) => (
    <div className='circle'>
      {index}. {name}
    </div>
  );
  const DogCircles = ({dogs}) => {
    const dogsSuIlgiu = dogs.map((item, index) => {item, item.length, index + 1})
    const surikiuotaPagalIlgi = dogsSuIlgiu.sort((a, b) => a.length - b.length)
  
    
    return (
        <div className="App">
            <header className="App-header">
              <h1> DOG LISTS</h1>
              <div className='dogs'>
              {
                dogs.map((atv, i) => <div className='dog' key={i}>{atv}</div>)
              }
              </div>
              <div className='apskritimai'>
                {
                  sortinimas(dogs).map((dug, i) => <div className='apskritimas' key={i}>{dug}</div>)
                }
              </div>
              <div className='dogs'>
              {
                dogs.map((kul, i) => <div className={'dog ' + (i % 2 ? 'circle' : 'square')} key={i}>{kul}</div>)
              }
              </div>
              <div className='dogs'>
                {
                  dogs.map((dog, i) => dog[0] === dog[0].toUpperCase() ? null : <div className='dog' key={i}>{dog}</div>)
                }
              </div>
              <div className='dogs'>
                {surikiuotaPagalIlgi.map(item => (
                  <DogCircle key={item.index} {...item} />
                ))}
              </div>
              
            </header>
        </div>
    );
}}