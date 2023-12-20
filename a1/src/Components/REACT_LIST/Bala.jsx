import React from 'react';
import {seaPlaners} from '../../Duomenys'

export default function Bala() {
  return (
    <div className='squares'>
      <h4>Bala</h4>
        {seaPlaners.map((item) => (
          <div key={item.id} className='square'>
            <p>ID: {item.id}</p>
            <p>Type: {item.type}</p>
            <p style={{color: item.color}}>Name: {item.name}</p>
            <p>Color: {item.color}</p>
          </div>
        ))
        }
    </div>
  );
}