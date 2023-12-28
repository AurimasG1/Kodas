import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './Buttons.scss';
import './form.scss';
import Create from './Components/032 colors/Create';
import {useEffect, useState} from 'react';
import {lsRead, lsStore} from './Components/032 colors/lsManager';
import Read from './Components/032 colors/Read';

export default function App() {
  const key = 'colors';
  const [createData, setCreateData] = useState(null);
  const [colors, setColors] = useState([]);

  useEffect(
    _ => {
      if (null === createData) {
        return;
      }
      lsStore(key, createData);
      console.log(createData);
    },
    [createData]
  );

  useEffect(_ => {
    setColors(lsRead(key));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <Create setCreateData={setCreateData} />
        </div>
        <div className="col-7">
          <Read colors={colors} />
        </div>
      </div>
    </div>
  );
}
