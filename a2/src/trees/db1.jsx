import React, { useEffect, useState } from 'react';
import './table.scss'
import axios from 'axios';
import './form.scss'
import './buttons.scss'
import './App.scss'

const API_URL = 'http://localhost:3001/trees'

export default function App() {
	const sorts = [
		{ name: 'default', value: 'Default' },
		{ name: 'height_asc', value: 'Height 1-9' },
		{ name: 'height_desc', value: 'Height 9-1' },
		{ name: 'name_asc', value: 'Name A-Z' },
		{ name: 'name_desc', value: 'Name Z-A' },
	]
	const types = ['lapuotis', 'spygliuotis', 'palmė'];
	const [inputs, setInputs] = useState({ name: '', height: '', type: '' });
	const [cutId, setCutId] = useState('');
	const [growInputs, setGrowInputs] = useState({ id: '', height: '' });
	const [sort, setSort] = useState('default');
	const [trees, setTrees] = useState([]);
	const [stats, setStats] = useState({ total: 0, average: 0 })

	const handleInputChange = e => {
		setInputs({ ...inputs, [e.target.id]: e.target.value })
	}

	const handleGrowInputChange = e => {
		setGrowInputs({ ...growInputs, [e.target.id]: e.target.value })
	}

	useEffect(_ => {
		axios.get(API_URL + '/stats')
			.then(res => {
				setStats(res.data)
			})
	}, [trees])


	useEffect(_ => {
		axios.get(`${API_URL}/?sort=${sort}`)
			.then(res => setTrees(res.data))
	}, [sort]);

	const plant = _ => {
		axios.post(API_URL, { ...inputs, height: +inputs.height })
			.then(res => {
				(setTrees([...trees, { ...inputs, id: res.data.id }]));
				setInputs({ name: '', height: '', type: '' });
			});
	}

	const cut = _ => {
		axios.delete(`${API_URL}/${cutId}`)
			.then(_ => {
				setTrees(trees.filter(tree => tree.id !== +cutId));
				setCutId('')
			})
	}

	const grow = _ => {
		axios.put(`${API_URL}/${growInputs.id}`, { height: +growInputs.height })
			.then(_ => {
				setTrees(trees.map(tree => tree.id === +growInputs.id ? { ...tree, height: +growInputs.height } : tree))
				setGrowInputs({ id: '', height: '' })
			})
	}

	const array1 = [1, 2, 3];
	const array2 = [4, 5, 6];

	const combined = [...array1, ...array2]
	return (
		<div className='inside'>
			<h1>Trees</h1>
			<h2>Trees in garden: {stats.total}, average height: {stats.average} m</h2>
			<div className='sort-box'>
				{
					sorts.map(s => (
						<label key={s.name}
							style={{
								color: sort === s.name ? 'white' : 'skyblue',
								backgroundColor: sort === s.name ? 'skyblue' : 'white',
								cursor: sort === s.name ? 'default' : 'pointer',
							}}
							onClick={_ => setSort(s.name)}
						>{s.value}</label>
					))
				}

			</div>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Height</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					{trees.map(tree => (
						<tr key={tree.id}>
							<td>{tree.id}</td>
							<td>{tree.name}</td>
							<td>{tree.height}</td>
							<td>{tree.type}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className='forms'>
				<div className='form'>
					<h2>Add a Tree</h2>
					<form>
						<label htmlFor='name'>Name</label>
						<input type='text' id='name' value={inputs.name} onChange={handleInputChange} />
						<label htmlFor='name'>Height</label>
						<input type='text' id='height' value={inputs.height} onChange={handleInputChange} />
						<label htmlFor='name'>Type</label>
						<select id='type' value={inputs.type} onChange={handleInputChange}>
							<option key={0} value=''>Pasirinkti</option>{
								types.map(type => (
									<option key={type} value={type}>{type}</option>
								))
							}</select>
						<button type='button' className='green' onClick={plant}>Plant tree</button>
					</form>
				</div>


				<div className='form'>
					<h2>Cut a Tree</h2>
					<form>
						<label htmlFor='id'>ID</label>
						<input type='text' id='id' placeholder='ID' value={cutId} onChange={e => setCutId(e.target.value)} />
						<button type='button' className='green' onClick={cut}>Cut a tree</button>
					</form>
				</div>
				<div className='form'>
					<h2>Grow a Tree</h2>
					<form>
						<label htmlFor='id'>ID</label>
						<input type='text' id='id' placeholder='ID' value={growInputs.id} onChange={handleGrowInputChange} />
						<label htmlFor='name'>Height</label>
						<input type='text' id='height' value={growInputs.height} onChange={handleGrowInputChange} />
						<button type='button' className='green' onClick={grow}>Grow a tree</button>
					</form>
				</div>
			</div>
		</div>
	);
}