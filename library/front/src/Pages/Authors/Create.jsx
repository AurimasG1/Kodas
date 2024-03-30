import { useContext, useState } from "react"
import { Authors } from "../../Contexts/Authors"
import * as v from '../../Validators/textInputs';
import { MessagesContext } from "../../Contexts/Messages";



const defaultInputs = {
    name: '',
    surname: '',
    nickname: '',
    born: '',
}

export default function Create() {

    const [inputs, setInputs] = useState(defaultInputs)
    const { setStoreAuthor } = useContext(Authors);
    const { addMessage } = useContext(MessagesContext);
    const [error, setError] = useState(new Map());

    const isValidDate = (dateString) => {
        // Check if dateString is a valid date (YYYY-MM-DD format)
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        return dateRegex.test(dateString) && !isNaN(Date.parse(dateString));
    };

    const handleChange = e => {
        const { id, value } = e.target;
        if (id === 'born' && !isValidDate(value)) {
            // Invalid date entered, do not update the state
            return;
        }
        setInputs(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const create = _ => {
        const errors = new Map();

        v.validate(inputs.name, 'name', errors, [v.lettersOnly, v.required, v.string, [v.min, 3], [v.max, 100]])
        v.validate(inputs.surname, 'surname', errors, [v.lettersOnly, v.required, v.string, [v.max, 100]])
        v.validate(inputs.nickname, 'nickname', errors, [v.sometimes, v.string, [v.min, 3], [v.max, 100]])
        v.validate(inputs.born, 'date', errors, [v.required, v.isValidDate])

        if (errors.size > 0) {
            errors.forEach(err => addMessage({ type: 'danger', text: err }));
            setError(errors);
            return;
        }



        // return;

        setStoreAuthor(inputs);
        setInputs(defaultInputs);
    }

    return (
        <div className="card mt-2">
            <div className="card-header">
                <h2>Create Author</h2>
            </div>
            <div className="card-body">

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control"
                        style={{
                            borderColor: error.has('name') ? 'red' : null,
                            borderWidth: error.has('name') ? '4px' : '1px',
                            borderStyle: 'solid',
                        }}
                        id="name" value={inputs.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Surname</label>
                    <input type="text" className="form-control"
                        style={{
                            borderColor: error.has('surname') ? 'red' : null,
                            borderWidth: error.has('surname') ? '4px' : '1px',
                            borderStyle: 'solid',
                        }} id="surname" value={inputs.surname} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nickname</label>
                    <input type="text" className="form-control"
                        style={{
                            borderColor: error.has('nickname') ? 'red' : null,
                            borderWidth: error.has('nickname') ? '4px' : '1px',
                            borderStyle: 'solid',
                        }} id="nickname" value={inputs.nickname} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="born" className="form-label">Born</label>
                    <input type="date" className="form-control"
                        style={{
                            borderColor: error.has('date') ? 'red' : null,
                            borderWidth: error.has('date') ? '4px' : '1px',
                            borderStyle: 'solid',
                        }} id="born" value={inputs.born} onChange={handleChange} />
                </div>
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-primary m-2" onClick={create}>Create</button>
            </div>
        </div>
    )
}