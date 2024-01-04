import {useContext} from 'react';
import {Context} from './Context';
import {ColorContext} from './ColorContext';

export default function C({counter1}) {
  const {counter2, hello} = useContext(Context);
  const {color} = useContext(ColorContext);
  return (
    <div className="big-bin">
      <h1>
        C I:{counter1}, II:{counter1} III: {counter2}
      </h1>
      <h2 style={{color: color}}>{hello}</h2>
    </div>
  );
}
