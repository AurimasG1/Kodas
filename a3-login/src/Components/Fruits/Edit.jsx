import { useContext, useEffect, useState } from "react";
import TopNav from "../TopNav";
import { Fruits } from "../../Contexts/Fruits";
import { Router } from "../../Contexts/Router";

export default function Edit() {

    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [form, setForm] = useState('');
    const [fruit, setFruit] = useState(null)
    const { fruits, setEditFruit, setFruits } = useContext(Fruits);
    const params = useContext(Router);


    useEffect(_ => {
        if (null == fruits) {
            return;
        }
        const fruit = fruits.find(fruit => fruit.id === +params[1]);

        if (!fruit) {
            setFruit(null)
        } else {
            setFruit(fruit)
        }
    }, [fruits, params]);

    useEffect(_ => {
        if (null === fruit) {
            return;
        }
        setName(fruit.name);
        setColor(fruit.color);
        setForm(fruit.form);

    }, [fruit, setName, setColor, setForm]);

    if (!fruits) return (
        <div>
            <TopNav />
            <h1>Loading...</h1>

        </div>
    );
    if (!fruit) return (
        <div>
            <TopNav />
            <h1>Fruit not found</h1>

        </div>
    );


    const save = _ => {
        const editedFruit = {
            name,
            color,
            form,
            id: fruit.id
        }
        setFruits(f => f.map(fruit => fruit.id === editedFruit.id ? { ...editedFruit, temp: true, preEdit: fruit } : fruit));
        setEditFruit(editedFruit);
        window.location.href = '#fruits'
    };

    return (

        <div>
            <TopNav />
            <h1>Edit fruit</h1>
            <div className="fruits-bin">
                <div className="form">
                    <div className="form-group">
                        <label>name</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>color</label>
                        <input type="color" value={color} onChange={e => setColor(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>form</label>
                        <div className="checkboxes">
                            <div>
                                <input id="S" type="checkbox" checked={'square' === form} onChange={_ => setForm('square')} />
                                <label htmlFor="S">Square</label>
                            </div>
                            <div>
                                <input id="C" type="checkbox" checked={'circle' === form} onChange={_ => setForm('circle')} />
                                <label htmlFor="C">Circle</label>
                            </div>
                            <div>
                                <input id="R" type="checkbox" checked={'rounded' === form} onChange={_ => setForm('rounded')} />
                                <label htmlFor="R">Rounded</label>
                            </div>
                        </div>
                    </div>

                    <button className="green" onClick={save}>Save</button>

                </div>
            </div>
        </div>
    )
}