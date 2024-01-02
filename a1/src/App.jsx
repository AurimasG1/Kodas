import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './Buttons.scss';
import './form.scss';
import Create from './Components/032 colors/Create';
import {useEffect, useState} from 'react';
import {
  lsDestroy,
  lsRead,
  lsStore,
  lsUpdate,
} from './Components/032 colors/lsManager';
import Read from './Components/032 colors/Read';
import Delete from './Components/032 colors/Delete';
import Edit from './Components/032 colors/Edit';

export default function App() {
  const KEY = 'colors';
  const [createData, setCreateData] = useState(null);
  const [colors, setColors] = useState([]);
  const [deleteData, setDeleteData] = useState(null);
  const [destroyData, setDestroyData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [updateData, setUpdateData] = useState(null);

  useEffect(
    _ => {
      if (null === createData) {
        return;
      }
      const id = lsStore(KEY, createData);
      setColors(prevColors => [...prevColors, {...createData, id}]);
    },
    [createData]
  );

  useEffect(
    _ => {
      if (null === destroyData) {
        return;
      }
      lsDestroy(KEY, destroyData.id);
      setColors(prevColors =>
        prevColors.filter(color => color.id !== destroyData.id)
      );
      setDeleteData(null);
    },
    [destroyData]
  );

  useEffect(_ => {
    setColors(lsRead(KEY));
  }, []);

  useEffect(
    _ => {
      if (null === updateData) {
        return;
      }
      lsUpdate(KEY, updateData.id, updateData);
      setColors(prevColors =>
        prevColors.map(color =>
          color.id !== updateData.id
            ? {...updateData, id: updateData.id}
            : color
        )
      );
      setEditData(null);
    },
    [updateData]
  );

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <Create setCreateData={setCreateData} />
          </div>
          <div className="col-7">
            <Read
              colors={colors}
              setDeleteData={setDeleteData}
              setEditData={setEditData}
            />
          </div>
        </div>
      </div>
      <Delete
        deleteData={deleteData}
        setDeleteData={setDeleteData}
        setDestroyData={setDestroyData}
      />
      <Edit
        editData={editData}
        setEditData={setEditData}
        setUpdateData={setUpdateData}
      />
    </>
  );
}
