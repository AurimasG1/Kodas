import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './buttons.scss';
import './form.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import Modal from './Components/Bankas/Modal';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
	const [vardas, setVardas] = useState('')
	const [pavarde, setPavarde] = useState('')
	const [saskaitos, setSaskaitos] = useState([])
	const [suma, setSuma] = useState(0)
	const [pasirinktiSaskaitosIndeksa, setPasirinktiSaskaitosIndeksa] = useState(null);
	const [lentelesRusiavimas, setLentelesRusiavimas] = useState('pavarde');
	const [modalMessage, setModalMessage] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (message) => {
		setModalMessage(message);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setModalMessage('');
		setIsModalOpen(false);
	};

	const sukurtiNaujaSaskaita = _ => {
		const id = uuidv4();
		let naujaSaskaita
		if (!vardas || !pavarde) {
			return;
		} else {
			naujaSaskaita = {
				vardas,
				pavarde,
				suma: 0,
				id: id,
			}
			setSaskaitos([...saskaitos, naujaSaskaita])
			setVardas('')
			setPavarde('')
		}

		if (null !== naujaSaskaita) {
			openModal('Nauja sąskaita sukurta sėkmingai')
		} else {
			return;
		}

	}
	useEffect(_ => {
		const issaugotosSaskaitos = JSON.parse(localStorage.getItem('saskaitos')) || [];
		setSaskaitos(issaugotosSaskaitos)
	}, [])

	useEffect(_ => {
		localStorage.setItem('saskaitos', JSON.stringify(saskaitos))
	}, [saskaitos])

	const pridetiLesas = id => {
		const naujasSaskaitosSarasas = [...saskaitos];
		naujasSaskaitosSarasas[id].suma += suma
		setSaskaitos(naujasSaskaitosSarasas)
		setSuma(0)
		openModal('Lėšos pridėtos sėkmingai!');
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
			openModal('Lėšos nuskaičiuotos sėkmingai!');
		}
		else {
			openModal('Nepakanka lėšų sąskaitoje!');
		}

	}

	const rusiuotiPagalPavarde = _ => {
		const naujasSaskaitosSarasas = [...saskaitos]
		naujasSaskaitosSarasas.sort((a, b) => (a.pavarde.localeCompare(b.pavarde)))
		setSaskaitos(naujasSaskaitosSarasas)
	}

	const rusiuotiPagalVarda = _ => {
		const naujasSaskaitosSarasas2 = [...saskaitos]
		naujasSaskaitosSarasas2.sort((a, b) => (a.vardas.localeCompare(b.vardas)))
		setSaskaitos(naujasSaskaitosSarasas2)
	}



	return (
		<>
			<h1>Banko Sąskaitos</h1>
			<div>
				<h2>Nauja Sąskaita</h2>
				<label><input type="text" name="vardas" value={vardas} onChange={(e) => setVardas(e.target.value)} />
					Vardas:</label>

				<label><input type="text" name="pavarde" value={pavarde} onChange={(e) => setPavarde(e.target.value)} />
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
							<tr key={saskaita.id}>
								<td>{i + 1}</td>
								<td>{saskaita.vardas}</td>
								<td>{saskaita.pavarde}</td>
								<td>{saskaita.suma}</td>
								<td><button onClick={_ => istrintiSaskaita(saskaita.id)}>Ištrinti</button></td>
								<td>
									<input name='suma' type="number" value={suma[saskaita.id]} onChange={(e) => setSuma(parseInt(e.target.value, 10))}></input>
									<button onClick={() => pridetiLesas(saskaita.id)}>Pridėti lėšų</button>
									<button onClick={() => nuskaiciuotiLesas(saskaita.id)}>Nuskaičiuoti lėšas</button>
								</td>
							</tr>
						))
					}
				</tbody>

			</table>
			<button onClick={_ => rusiuotiPagalVarda()}>Pagal vardą</button>
			<button onClick={_ => rusiuotiPagalPavarde()}>Pagal pavardę</button>
			{isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
		</>
	);
}