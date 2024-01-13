import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './buttons.scss';
import './form.scss';
import { useState, useEffect } from 'react';
import Modal from './Components/Bankas/Modal';
import axios from 'axios'

const URL = 'http://localhost:3001/saskaitos'

export default function App() {
	const [vardas, setVardas] = useState('');
	const [pavarde, setPavarde] = useState('');
	const [suma, setSuma] = useState(0);
	const [saskaitos, setSaskaitos] = useState(null);
	const [storeSaskaitas, setStoreSaskaitas] = useState(null)
	const [sunaikintiSaskaitas, setSunaikintiSaskaitas] = useState(null)
	const [atnaujintiSaskaitas, setAtnaujintiSaskaitas] = useState(null)
	const [modalMessage, setModalMessage] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [sortingParam, setSortingParam] = useState('');
	const [filterType, setFilterType] = useState('visos');

	useEffect(_ => {
		axios.get(URL)
			.then(res => setSaskaitos(res.data))
			.catch(err => console.log(err))
	}, [storeSaskaitas])

	useEffect(_ => {
		if (null !== storeSaskaitas) {
			axios.post(URL, storeSaskaitas)
				.then(res => {
					setSaskaitos(prevSaskaitos => [{
						vardas,
						pavarde,
						suma: 0,
						id: res.data.id
					}, ...prevSaskaitos])
					setVardas('')
					setPavarde('')
				})
				.catch(err => console.log(err))
		}
	}, [storeSaskaitas, vardas, pavarde])

	useEffect(_ => {
		if (null !== sunaikintiSaskaitas && sunaikintiSaskaitas.suma === 0) {
			axios.delete(`${URL}/${sunaikintiSaskaitas.id}`)
				.then(res => {
					setSaskaitos(saskaitos.filter(saskaita => saskaita.id !== sunaikintiSaskaitas.id))
					openModal('Sąskaita ištrinta sėkmingai')
				})
				.catch(err => console.log(err))
			openModal('Klaida trinant sąskaitą')
		}
		else if (sunaikintiSaskaitas && sunaikintiSaskaitas.suma > 0) {
			openModal('Negalite ištrinti sąskaitos su likusia suma.');
		}
	}, [sunaikintiSaskaitas])

	useEffect(_ => {
		if (null !== atnaujintiSaskaitas) {
			axios.put(`${URL}/${atnaujintiSaskaitas.id}`, atnaujintiSaskaitas)
				.then(_ => {
					setSaskaitos(saskaitos.map(saskaita => saskaita.id === atnaujintiSaskaitas.id ? {
						...saskaita, suma: atnaujintiSaskaitas.suma
					} : saskaita))
				})
				.catch(err => console.log(err))
		}
	}, [atnaujintiSaskaitas])

	const openModal = (message) => {
		setModalMessage(message);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setModalMessage('');
		setIsModalOpen(false);
	};

	// const pateiktiSaskaita = _ => {
	// 	if (!vardas || !pavarde) {
	// 		openModal('Užpildykite visus laukus!');
	// 	} else {
	// 		setStoreSaskaitas({
	// 			vardas,
	// 			pavarde,
	// 			suma: 0,
	// 		})
	// 		openModal('Nauja sąskaita sukurta sėkmingai');
	// 	}

	// }

	const pateiktiSaskaita = () => {
		if (!vardas || !pavarde) {
			openModal('Užpildykite visus laukus!');
		} else {
			const naujaSaskaita = {
				vardas,
				pavarde,
				suma: 0,
			};

			axios.post(URL, naujaSaskaita)
				.then(res => {
					const { id } = res.data;
					setSaskaitos([{ ...naujaSaskaita, id }, ...saskaitos]);
					setVardas('');
					setPavarde('');
					openModal('Nauja sąskaita sukurta sėkmingai');
				})
				.catch(err => console.log(err));
		}
	};

	const PridetiLesas = (saskaita) => {
		const currentSuma = saskaita.suma || 0
		const inputValue = parseFloat(suma[saskaita.id]) || 0

		if (inputValue === 0) {
			openModal('Pervedama suma turi būti didesnė nei 0 :)');
		}
		else {
			const atnaujintaSaskaita = {
				...saskaita,
				suma: currentSuma + inputValue
			}
			setAtnaujintiSaskaitas(atnaujintaSaskaita)
			openModal('Lėšos pridėtos sėkmingai');
		}
	}

	const NuskaiciuotiLesas = (saskaita) => {
		const currentSuma = saskaita.suma || 0
		const inputValue = parseFloat(suma[saskaita.id]) || 0
		if (inputValue === 0) {
			openModal('Atimama suma turi būti didesnė nei 0 :)');
		}
		else if (currentSuma >= inputValue) {

			const atnaujintaSaskaita = {
				...saskaita,
				suma: currentSuma - inputValue
			}
			setAtnaujintiSaskaitas(atnaujintaSaskaita)
			openModal('Lėšos nuskaičiuotos sėkmingai!');
		}
		else {
			openModal('Sąskaitoje yra mažiau nei bandote atimti');
		}
	}


	const rusiuotiPagalPavarde = _ => {
		setSortingParam('pavarde');
		sortSaskaitos();
	}

	const rusiuotiPagalVarda = _ => {
		setSortingParam('vardas');
		sortSaskaitos();
	}

	const sortSaskaitos = _ => {
		const sortedSaskaitos = [...saskaitos];
		sortedSaskaitos.sort((a, b) => {
			if (sortingParam === 'vardas') {
				return a.vardas.localeCompare(b.vardas);
			} else if (sortingParam === 'pavarde') {
				return a.pavarde.localeCompare(b.pavarde);
			}
			return 0;
		});
		setSaskaitos(sortedSaskaitos);
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
						placeholder='Įveskite vardą'
						onChange={(e) => setVardas(e.target.value)}
					/>
					Vardas:
				</label>

				<label>
					<input
						type="text"
						name="pavarde"
						value={pavarde}
						placeholder='Įveskite pavardę'
						onChange={(e) => setPavarde(e.target.value)}
					/>
					Pavardė:
				</label>

				<button onClick={pateiktiSaskaita}>Sukurti Naują Sąskaitą</button>
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
					{saskaitos && saskaitos.length !== 0 && saskaitos
						.filter(saskaita => {
							if (filterType === 'tuscios') {
								return saskaita.suma === 0;
							} else if (filterType === 'suLesomis') {
								return saskaita.suma > 0;
							}
							return true;
						}).map((saskaita, i) => (
							<tr key={saskaita.id}>
								<td>{i + 1}</td>
								<td>{saskaita.vardas}</td>
								<td>{saskaita.pavarde}</td>
								<td>{saskaita.suma}</td>
								<td>
									<button onClick={_ => setSunaikintiSaskaitas(saskaita)}>Sunaikinti</button>
								</td>
								<td>
									<input name='suma2' type='number' value={suma[saskaita.id] || 0} onChange={e => setSuma({ ...suma, [saskaita.id]: Math.max(0, parseInt(e.target.value, 10)) })} />
									<button onClick={_ => {
										PridetiLesas(saskaita)
										setSuma((prevSuma) => ({ ...prevSuma, [saskaita.id]: '' }))
									}}>Pridėti</button>
									<button onClick={_ => {
										NuskaiciuotiLesas(saskaita)
										setSuma((prevSuma) => ({ ...prevSuma, [saskaita.id]: '' }))
									}}>Atimti</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
			{saskaitos && !saskaitos.length && <h4>neradau</h4>}
			{!saskaitos && <h4>nera</h4>}
			<button onClick={_ => rusiuotiPagalVarda()}>Pagal vardą</button>
			<button onClick={_ => rusiuotiPagalPavarde()}>Pagal pavardę</button>
			<button onClick={() => setFilterType('visos')}>Visos sąskaitos</button>
			<button onClick={() => setFilterType('tuscios')}>Tuščios sąskaitos</button>
			<button onClick={() => setFilterType('suLesomis')}>Sąskaitos su lėšomis</button>
			{isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
		</>
	);
}

