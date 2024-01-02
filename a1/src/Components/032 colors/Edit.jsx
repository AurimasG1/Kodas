import {useEffect, useState} from 'react';
export default function Edit({editData, setEditData, setUpdatedata}) {
  const [size, setSize] = useState('');
  const [colors, setColors] = useState('');
  useEffect(
    _ => {
      if (null === editData) {
        return null;
      }
      setColors(editData.colors);
      setSize(editData.size);
    },
    [editData]
  );
  if (null === editData) {
    return null;
  }

  const save = _ => {
    setUpdatedata({});
  };

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit</h5>
            <button type="button" className="btn-close"></button>
          </div>
          <div className="modal-body">
            <p>Are you sure?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="red">
              Delete
            </button>
            <button
              type="button"
              className="black"
              onClick={_ => setEditData(setUpdatedata)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
