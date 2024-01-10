import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './buttons.scss';
import './form.scss';
import { useState } from 'react';

import React, { useState, useEffect } from 'react';

const Bankas = () => {
    const [saskaitos, setSaskaitos] = useState([]);
    const [vardas, setVardas] = useState('');
    const [pavarde, setPavarde] = useState('');
    const [suma, setSuma] = useState(0);
    const [lentelesRusavimas, setLentelesRusavimas] = useState('pavarde'); // Pagal ka rusiuoti saskaitas: 'vardas' arba 'pavarde'

    useEffect(() => {
        // Gautos saskaitos is LocalStorage
        const storedSaskaitos = JSON.parse(localStorage.getItem('saskaitos')) || [];
        setSaskaitos(storedSaskaitos);
    }, []);

    useEffect(() => {
        // Issaugojame saskaitas i LocalStorage kai jos pasikeicia
        localStorage.setItem('saskaitos', JSON.stringify(saskaitos));
    }, [saskaitos]);

    const sukurtiNaujaSaskaita = () => {
        const naujaSaskaita = {
            vardas,
            pavarde,
            suma: 0,
        };

        setSaskaitos([...saskaitos, naujaSaskaita]);
        setVardas('');
        setPavarde('');
    };

    const pridetiLesas = (index) => {
        const naujasSaskaitosSarasas = [...saskaitos];
        naujasSaskaitosSarasas[index].suma += suma;
        setSaskaitos(naujasSaskaitosSarasas);
        setSuma(0);
    };

    const nuskaiciuotiLesas = (index) => {
        const naujasSaskaitosSarasas = [...saskaitos];
        if (naujasSaskaitosSarasas[index].suma >= suma) {
            naujasSaskaitosSarasas[index].suma -= suma;
            setSaskaitos(naujasSaskaitosSarasas);
            setSuma(0);
        } else {
            alert('Nepakanka lėšų sąskaitoje');
        }
    };

    const istrintiSaskaita = (index) => {
        const naujasSaskaitosSarasas = [...saskaitos];
        naujasSaskaitosSarasas.splice(index, 1);
        setSaskaitos(naujasSaskaitosSarasas);
    };

    const rusiuotiSaskaitas = (rusiavimoKriterijus) => {
        setLentelesRusavimas(rusiavimoKriterijus);
        const naujasSaskaitosSarasas = [...saskaitos];
        naujasSaskaitosSarasas.sort((a, b) => (a[rusiavimoKriterijus] > b[rusiavimoKriterijus] ? 1 : -1));
        setSaskaitos(naujasSaskaitosSarasas);
    };

    return (
        <div>
            <h1>Banko Sąskaitos</h1>
            <div>
                <h2>Nauja Sąskaita</h2>
                <label htmlFor="vardas">Vardas:</label>
                <input type="text" id="vardas" value={vardas} onChange={(e) => setVardas(e.target.value)} />
                <label htmlFor="pavarde">Pavardė:</label>
                <input type="text" id="pavarde" value={pavarde} onChange={(e) => setPavarde(e.target.value)} />
                <button onClick={sukurtiNaujaSaskaita}>Sukurti Naują Sąskaitą</button>
            </div>
            <div>
                <h2>Sąskaitos</h2>
                <button onClick={() => rusiuotiSaskaitas('vardas')}>Rūšiuoti pagal Vardą</button>
                <button onClick={() => rusiuotiSaskaitas('pavarde')}>Rūšiuoti pagal Pavardę</button>
                <table>
                    <thead>
                        <tr>
                            <th>Vardas</th>
                            <th>Pavardė</th>
                            <th>Suma</th>
                            <th>Veiksmai</th>
                            <th>Sumos Keitimas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {saskaitos.map((saskaita, index) => (
                            <tr key={index}>
                                <td>{saskaita.vardas}</td>
                                <td>{saskaita.pavarde}</td>
                                <td>{saskaita.suma}</td>
                                <td>
                                    <button onClick={() => istrintiSaskaita(index)}>Ištrinti</button>
                                </td>
                                <td>
                                    <input type="number" value={suma} onChange={(e) => setSuma(parseInt(e.target.value, 10))} />
                                    <button onClick={() => pridetiLesas(index)}>Pridėti lėšų</button>
                                    <button onClick={() => nuskaiciuotiLesas(index)}>Nuskaičiuoti lėšas</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bankas;
