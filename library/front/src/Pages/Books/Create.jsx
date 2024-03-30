import { useContext, useState } from "react"
import { Books } from "../../Contexts/Books"
import useAuthorsDropdown from "../../Hooks/useAuthorsDropdown";
import * as v from '../../Validators/textInputs';
import { MessagesContext } from "../../Contexts/Messages";

const defaultInputs = {
    title: '',
    pages: '',
    genre: '',
    author_id: '',
}

export default function Create() {

    const [inputs, setInputs] = useState(defaultInputs)
    const { setStoreBook } = useContext(Books);
    const { authorsDropdown } = useAuthorsDropdown();
    const { addMessage } = useContext(MessagesContext);
    const [error, setError] = useState(new Map());

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const create = _ => {
        const errors = new Map();
        const authorsIds = authorsDropdown.map(author => author.id);

        v.validate(inputs.title, 'title', errors, [v.required, v.string, [v.min, 3], [v.max, 100]]);
        v.validate(inputs.pages, 'pages', errors, [v.required, [v.integer, 10000], [v.min, 1]]);
        v.validate(inputs.genre, 'genre', errors, [v.required, v.string, [v.min, 3], [v.max, 100]]);
        v.validate(inputs.author_id, 'author_id', errors, [v.required, [v.inNumbers, authorsIds]]);

        if (errors.size > 0) {
            errors.forEach(err => addMessage({ type: 'danger', text: err }));
            setError(errors);
            return;
        }
        const author = {
            name: authorsDropdown.find(author => author.id === +inputs.author_id).name,
            surname: authorsDropdown.find(author => author.id === +inputs.author_id).surname,
            nickname: authorsDropdown.find(author => author.id === +inputs.author_id).nickname,
        }
        setStoreBook({ ...inputs, author });
        setInputs(defaultInputs);
    }

    return (
        <div className="card mt-2">
            <div className="card-header">
                <h2>Create Book</h2>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text"
                        style={{
                            borderColor: error.has('title') ? 'red' : null,
                            borderWidth: error.has('title') ? '4px' : '1px',
                            borderStyle: 'solid',
                        }} className="form-control" id="title" value={inputs.title} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="pages" className="form-label">Total Pages</label>
                    <input type="text"
                        style={{
                            borderColor: error.has('pages') ? 'red' : null,
                            borderWidth: error.has('pages') ? '4px' : '1px',
                            borderStyle: 'solid',
                        }} className="form-control" id="pages" value={inputs.pages} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">Genre</label>
                    <input type="text"
                        style={{
                            borderColor: error.has('genre') ? 'red' : null,
                            borderWidth: error.has('genre') ? '4px' : '1px',
                            borderStyle: 'solid',
                        }} className="form-control" id="genre" value={inputs.genre} onChange={handleChange} />
                </div>
                {
                    authorsDropdown &&
                    <div className="mb-3">
                        <label htmlFor="author_id" className="form-label">Author</label>
                        <select className="form-select" style={{
                            borderColor: error.has('author_id') ? 'red' : null,
                            borderWidth: error.has('author_id') ? '4px' : '1px',
                            borderStyle: 'solid',
                        }} id="author_id" value={inputs.author_id} onChange={handleChange}>
                            <option value="" >Select author</option>
                            {
                                authorsDropdown.map(author => <option key={author.id} value={author.id}>{author.name} {author.surname}</option>)
                            }
                        </select>
                    </div>
                }
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-primary m-2" onClick={create}>Create</button>
            </div>
        </div>
    )
}