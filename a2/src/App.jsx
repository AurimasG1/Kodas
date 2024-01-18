import React, { useEffect, useState } from 'react';
import './table.scss'
import axios from 'axios';
import './form.scss'
import './buttons.scss'
import './App.scss'

const API_URL = 'http://localhost:3001/trees'

export default function App() {
	// const trees = [
	// 	{ id: 1, name: 'Oak', height: 20, type: 'Deciduous' },
	// 	{ id: 2, name: 'Pine', height: 15, type: 'Evergreen' },
	// 	{ id: 3, name: 'Maple', height: 18, type: 'Deciduous' },
	// ];

	const types = ['lapuotis', 'spygliuotis', 'palmė']
	const [inputs, setInputs] = useState({ name: '', height: '', type: '' })

	const handleInputChange = e => {
		setInputs({ ...inputs, [e.target.id]: e.target.value })
	}

	const [trees, setTrees] = useState([])

	useEffect(_ => {
		axios.get(API_URL)
			.then(res => setTrees(res.data))
	}, [])


	return (
		<div className='inside'>
			<h1>Trees</h1>
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
						<button className='green'>Plant tree</button>
					</form>
				</div>
			</div>
		</div>
	);
}