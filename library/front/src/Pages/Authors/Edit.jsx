import { useContext, useState } from 'react';
import { Authors } from '../../Contexts/Authors';
import { MessagesContext } from '../../Contexts/Messages';
import * as v from '../../Validators/textInputs';


export default function Edit() {

    const { editAuthor, setEditAuthor, setUpdateAuthor } = useContext(Authors);
    const [error, setError] = useState(new Map());
    const { addMessage } = useContext(MessagesContext);

    const isValidDate = (dateString) => {
        // Check if dateString is a valid date (YYYY-MM-DD format)
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        return dateRegex.test(dateString) && !isNaN(Date.parse(dateString));
    };

    const formatDate = (dateString) => {
        return new Intl.DateTimeFormat('lt-LT').format(new Date(dateString));
    }

    const [inputs, setInputs] = useState({
        name: editAuthor.name,
        surname: editAuthor.surname,
        nickname: editAuthor.nickname,
        born: formatDate(editAuthor.born), // Format date here
    });

    // editAuthor.born.split('T')[0];

    // useEffect(_ => {
    //     console.log('MOUNT edit');
    //     return _ => console.log('UNMOUNT edit');
    // }, []);


    const handleChange = e => {
        const { id, value } = e.target;
        if (id === 'born' && !isValidDate(value)) {
            // Invalid date entered, do not update the state
            return;
        }
        setInputs(prev => ({ ...prev, [id]: value }));
    }

    const submit = _ => {
        const errors = new Map();

        v.validate(inputs.name, 'name', errors, [v.lettersOnly, v.required, v.string, [v.min, 3], [v.max, 100]])
        v.validate(inputs.surname, 'surname', errors, [v.lettersOnly, v.required, [v.min, 3], v.string, [v.max, 100]])
        v.validate(inputs.nickname, 'nickname', errors, [v.sometimes, v.string, [v.min, 3], [v.max, 100]])
        v.validate(inputs.born, 'date', errors, [v.required, v.isValidDate])

        if (errors.size > 0) {
            errors.forEach(err => addMessage({ type: 'danger', text: err }));
            setError(errors);
            return;
        }
        setUpdateAuthor({ ...editAuthor, ...inputs, old: editAuthor });
        setEditAuthor(null);
    }


    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={_ => setEditAuthor(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" style={{
                                borderColor: error.has('name') ? 'red' : null,
                                borderWidth: error.has('name') ? '4px' : '1px',
                                borderStyle: 'solid',
                            }} className="form-control" id="name" value={inputs.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="surname" className="form-label">Surname</label>
                            <input type="text" style={{
                                borderColor: error.has('surname') ? 'red' : null,
                                borderWidth: error.has('surname') ? '4px' : '1px',
                                borderStyle: 'solid',
                            }} className="form-control" id="surname" value={inputs.surname} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nickname" className="form-label">Nickname</label>
                            <input type="text" style={{
                                borderColor: error.has('nickname') ? 'red' : null,
                                borderWidth: error.has('nickname') ? '4px' : '1px',
                                borderStyle: 'solid',
                            }} className="form-control" id="nickname" value={inputs.nickname} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="born" className="form-label">Born</label>
                            <input type="date" style={{
                                borderColor: error.has('date') ? 'red' : null,
                                borderWidth: error.has('date') ? '4px' : '1px',
                                borderStyle: 'solid',
                            }} className="form-control" id="born" value={inputs.born} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={submit}>Save</button>
                        <button type="button" className="btn btn-secondary" onClick={_ => setEditAuthor(null)}>Cancel Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}