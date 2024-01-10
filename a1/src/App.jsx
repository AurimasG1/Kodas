import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './buttons.scss';
import './form.scss';
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
	const [vardas, setVardas] = useState('')
	const [pavarde, setPavarde] = useState('')
	const [saskaitos, setSaskaitos] = useState([])
	const [suma, setSuma] = useState(0)
	const [pasirinktiSaskaitosIndeksa, setPasirinktiSaskaitosIndeksa] = useState(null);
	const [lentelesRusiavimas, setLentelesRusiavimas] = useState('pavarde')

	const sukurtiNaujaSaskaita = _ => {
		const naujaSaskaita = {
			vardas,
			pavarde,
			suma: 0,
		}

		setSaskaitos([...saskaitos, naujaSaskaita])
		setVardas('')
		setPavarde('')
	}
	useEffect(_ => {
		const issaugotosSaskaitos = JSON.parse(localStorage.getItem('saskaitos')) || [];
		setSaskaitos(issaugotosSaskaitos)
	}, [])

	useEffect(_ => {
		localStorage.setItem('saskaitos', JSON.stringify(saskaitos))
	}, [saskaitos])

	const pridetiLesas = index => {
		const naujasSaskaitosSarasas = [...saskaitos];
		naujasSaskaitosSarasas[index].suma += suma
		setSaskaitos(naujasSaskaitosSarasas)
		setSuma(0)
	}

	const istrintiSaskaita = (index) => {
		const naujasSaskaitosSarasas = [...saskaitos];
		naujasSaskaitosSarasas.splice(index, 1);
		setSaskaitos(naujasSaskaitosSarasas);
	};

	const nuskaiciuotiLesas = (index) => {
		const naujasSaskaitosSarasas = [...saskaitos]
		if (naujasSaskaitosSarasas[index].suma >= suma) {
			naujasSaskaitosSarasas[index].suma -= suma
			setSaskaitos(naujasSaskaitosSarasas)
			setSuma(0)
		}
		else {
			alert('Nepakanka lėšų sąskaitoje')
		}

	}

	return (
		<>
			<h1>Banko Sąskaitos</h1>
			<div>
				<h2>Nauja Sąskaita</h2>
				<label><input type="text" id="vardas" value={vardas} onChange={(e) => setVardas(e.target.value)} />
					Vardas:</label>

				<label><input type="text" id="pavarde" value={pavarde} onChange={(e) => setPavarde(e.target.value)} />
					Pavardė:</label>

				<button onClick={sukurtiNaujaSaskaita}>Sukurti Naują Sąskaitą</button>
			</div>
			<table className="table table-sm table-dark">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Vardas</th>
						<th scope="col">Pavarde</th>
						<th scope="col">Suma</th>
						<th scope="col">Veiksmai</th>
						<th scope="col">Sumos Keitimas</th>
					</tr>
				</thead>
				<tbody>
					{
						saskaitos.map((saskaita, i) => (
							<tr key={i}>
								<td>{i + 1}</td>
								<td>{saskaita.vardas}</td>
								<td>{saskaita.pavarde}</td>
								<td>{saskaita.suma}</td>
								<td><button onClick={_ => istrintiSaskaita(i)}>Ištrinti</button></td>
								<td>
									<input name='suma' type="number" value={suma} onChange={(e) => setSuma(parseInt(e.target.value, 10))}></input>
									<button onClick={() => pridetiLesas(i)}>Pridėti lėšų</button>
									<button onClick={() => nuskaiciuotiLesas(i)}>Nuskaičiuoti lėšas</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</>
	);
}