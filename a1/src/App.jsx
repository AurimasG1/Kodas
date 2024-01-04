import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './Buttons.scss';
import './form.scss';
import Create from './Components/032 colors/Create';
import {useCallback, useEffect, useState} from 'react';
import {
  lsDestroy,
  lsRead,
  lsStore,
  lsUpdate,
} from './Components/032 colors/lsManager';
import Read from './Components/032 colors/Read';
import Delete from './Components/032 colors/Delete';
import Edit from './Components/032 colors/Edit';
import Messages from './Components/032 colors/Messages';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

export default function App() {
  const KEY = 'colors';
  const [colors, setColors] = useState([]); // readData
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [destroyData, setDestroyData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [updateData, setUpdateData] = useState(null);
  const [messages, setMessages] = useState([]);

  const addMessage = useCallback((type, text) => {
    const id = uuidv4();
    setMessages(prevMessages => [{id, type, text}, ...prevMessages]);
    setTimeout(_ => {
      setMessages(prevMessages => prevMessages.filter(m => m.id !== id));
    }, 3000);
  }, []);

  useEffect(_ => {
    setColors(lsRead(KEY));
  }, []);

  useEffect(
    _ => {
      if (null === createData) {
        return;
      }
      const id = lsStore(KEY, createData);
      setColors(prevColors => [...prevColors, {...createData, id}]);
      // get name for color
      const color = createData.color.replace('#', '');
      axios
        .get(`https://www.thecolorapi.com/id?hex=${color}`)
        .then(res => {
          const name = res.data.name.value;
          const newData = {...createData, id, name};
          lsUpdate(KEY, id, newData);
          setColors(prevColors =>
            prevColors.map(color => (color.id === id ? newData : color))
          );
          addMessage('info', 'Color name updated from APP');
        })
        .catch(_ => {
          console.log('error');
        });
    },
    [createData, setColors, addMessage]
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
      addMessage('danger', 'color destroyed succesfully');
    },
    [destroyData, setColors, addMessage]
  );

  useEffect(
    _ => {
      if (null === updateData) {
        return;
      }
      const id = updateData.id;
      lsUpdate(KEY, id, updateData);
      setColors(prevColors =>
        prevColors.map(color => (color.id === id ? {...updateData, id} : color))
      );
      setEditData(null);
      addMessage('success', 'color updated succesfully');
      const color = updateData.color.replace('#', '');
      axios
        .get(`https://www.thecolorapi.com/id?hex=${color}`)
        .then(res => {
          const name = res.data.name.value;
          const newData = {...updateData, id, name};
          lsUpdate(KEY, id, newData);
          setColors(prevColors =>
            prevColors.map(color => (color.id === id ? newData : color))
          );
          addMessage('info', 'Color name updated from APP');
        })
        .catch(_ => {
          console.log('error');
        });
    },
    [updateData, setColors, addMessage]
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
      <Messages messages={messages} />
    </>
  );
}
