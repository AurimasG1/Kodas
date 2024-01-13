import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './buttons.scss';
import './form.scss';
import { useState, useEffect, useRef } from 'react';
import Modal from './Components/Bankas/Modal';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
	const [vardas, setVardas] = useState('');
	const [pavarde, setPavarde] = useState('');
	const [saskaitos, setSaskaitos] = useState([]);
	const [editingIndex, setEditingIndex] = useState(null);
	const [suma, setSuma] = useState({});
	const [modalMessage, setModalMessage] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const inputRef = useRef(null);
	const [isInputFocused, setIsInputFocused] = useState(false);

	const openModal = (message) => {
		setModalMessage(message);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setModalMessage('');
		setIsModalOpen(false);
	};

	const sukurtiNaujaSaskaita = () => {
		const id = uuidv4();
		let naujaSaskaita;
		if (!vardas || !pavarde) {
			return;
		} else {
			naujaSaskaita = {
				vardas,
				pavarde,
				suma: 0,
				id: id,
			};
			setSaskaitos([...saskaitos, naujaSaskaita]);
			setVardas('');
			setPavarde('');
			openModal('Nauja sąskaita sukurta sėkmingai');
		}
	};

	useEffect(() => {
		const issaugotosSaskaitos = JSON.parse(localStorage.getItem('saskaitos')) || [];
		setSaskaitos(issaugotosSaskaitos);
	}, []);

	useEffect(() => {
		localStorage.setItem('saskaitos', JSON.stringify(saskaitos));
	}, [saskaitos]);

	const pridetiLesas = (id) => {
		const index = saskaitos.findIndex((saskaita) => saskaita.id === id);
		const naujasSaskaitosSararas = [...saskaitos];
		if (0 === suma[id]) {
			openModal('Pervedama suma turi būti didesnė nei 0 :)');
		} else {
			naujasSaskaitosSararas[index].suma += suma[id];
			setSaskaitos(naujasSaskaitosSararas);
			openModal('Lėšos pridėtos sėkmingai');
			setSuma((prevSuma) => ({ ...prevSuma, [id]: 0 }));
			setEditingIndex(null); // Reset editing index
			inputRef.current.blur();
		}
	};

	const nuskaiciuotiLesas = (id) => {
		const index = saskaitos.findIndex((saskaita) => saskaita.id === id);
		const naujasSaskaitosSarasas = [...saskaitos];
		if (0 === suma[id]) {
			openModal('Pervedama suma turi būti didesnė nei 0 :)');
		} else if (naujasSaskaitosSarasas[index].suma >= suma[id]) {
			naujasSaskaitosSarasas[index].suma -= suma[id];
			setSaskaitos(naujasSaskaitosSarasas);
			openModal('Lėšos nuskaičiuotos sėkmingai!');
			setSuma((prevSuma) => ({ ...prevSuma, [id]: 0 }));
			setEditingIndex(null); // Reset editing index
			inputRef.current.blur();
		} else {
			openModal('Nepakanka lėšų sąskaitoje!');
		}
	};

	const istrintiSaskaita = id => {
		setSaskaitos((prevSaskaitos) => prevSaskaitos.filter((saskaita) => saskaita.id !== id));
		openModal('Sąskaita ištrinta sėkmingai')
	};


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
				<label>
					<input
						type="text"
						name="vardas"
						value={vardas}
						onChange={(e) => setVardas(e.target.value)}
					/>
					Vardas:
				</label>

				<label>
					<input
						type="text"
						name="pavarde"
						value={pavarde}
						onChange={(e) => setPavarde(e.target.value)}
					/>
					Pavardė:
				</label>

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
					{saskaitos.map((saskaita, i) => (
						<tr key={saskaita.id}>
							<td>{i + 1}</td>
							<td>{saskaita.vardas}</td>
							<td>{saskaita.pavarde}</td>
							<td>{saskaita.suma}</td>
							<td>
								<button onClick={() => istrintiSaskaita(saskaita.id)}>Ištrinti</button>
							</td>
							<td>
								<input
									name="suma"
									type="number"
									value={editingIndex === saskaita.id ? suma[saskaita.id] : ''}
									onChange={(e) => {
										const value = e.target.value === '' ? '' : Math.max(0, parseInt(e.target.value, 10));
										if (isInputFocused && !isNaN(value)) {
											setSuma((prevSuma) => ({ ...prevSuma, [saskaita.id]: value }));
										}
									}}
									ref={inputRef}
									onFocus={_ => {
										setEditingIndex(saskaita.id)
										setIsInputFocused(true)
									}}
									onBlur={_ => {
										setEditingIndex(null)
										setIsInputFocused(false)
									}}
								></input>
								<button onClick={_ => {
									const inputFieldValue = suma[saskaita.id];
									if (inputFieldValue !== '' && !isNaN(inputFieldValue)) {
										pridetiLesas(saskaita.id);
										setSuma((prevSuma) => ({ ...prevSuma, [saskaita.id]: '' }));
									} else {
										openModal('Įveskite tinkamą skaičių į "Sumos Keitimas" laukelį.');
									}
								}}>Pridėti lėšų</button>
								<button onClick={_ => {
									const inputFieldValue = suma[saskaita.id];
									if (inputFieldValue !== '' && !isNaN(inputFieldValue)) {
										nuskaiciuotiLesas(saskaita.id);
										setSuma((prevSuma) => ({ ...prevSuma, [saskaita.id]: '' }));
									} else {
										openModal('Įveskite tinkamą skaičių į "Sumos Keitimas" laukelį.');
									}
								}}>Nuskaičiuoti lėšas</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={_ => rusiuotiPagalVarda()}>Pagal vardą</button>
			<button onClick={_ => rusiuotiPagalPavarde()}>Pagal pavardę</button>
			{isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
		</>
	);
}

