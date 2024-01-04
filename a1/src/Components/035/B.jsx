import {useContext} from 'react';
import C from './C';
import {ColorContext} from './ColorContext';

export default function B({counter1}) {
  const {color} = useContext(ColorContext);

  return (
    <div className="big-bin">
      <h1 style={{color: color}}>B</h1>
      <C counter1={counter1} />
    </div>
  );
}
