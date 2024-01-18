const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const fs = require('node:fs');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/saskaitos', (req, res) => {
	const data = JSON.parse(fs.readFileSync('./data/data2.json', 'utf8'));
	// res.status(400).end();
	res.json(data);
});

app.post('/saskaitos', (req, res) => {
	const data = JSON.parse(fs.readFileSync('./data/data2.json', 'utf8'));
	const naujaSaskaita = req.body;
	naujaSaskaita.id = uuidv4();
	data.push(naujaSaskaita);
	fs.writeFileSync('./data/data2.json', JSON.stringify(data));
	res.json({
		id: naujaSaskaita.id,
		message: 'Nauja sąskaita sukurta sėkmingai',
		type: 'success',
	});
});

app.delete('/saskaitos/:id', (req, res) => {
	let data = JSON.parse(fs.readFileSync('./data/data2.json', 'utf8'));
	const id = req.params.id;
	data = data.filter(saskaita => saskaita.id !== id);
	fs.writeFileSync('./data/data2.json', JSON.stringify(data));
	// respond 204 No Content
	// res.status(204).end();
	res.json({ message: 'Saskaita sunaikinta', type: 'info' });
});

app.put('/saskaitos/:id', (req, res) => {
	let data = JSON.parse(fs.readFileSync('./data/data2.json', 'utf8'));
	const id = req.params.id;
	const atnaujintaSaskaita = req.body;
	data = data.map(saskaita =>
		saskaita.id === id ? { ...atnaujintaSaskaita, id } : saskaita
	);
	fs.writeFileSync('./data/data2.json', JSON.stringify(data));
	res.json({ message: 'Saskaita is different now', type: 'info' });
});

app.put('/saskaitos/sort/:sortType', (req, res) => {
	let data = JSON.parse(fs.readFileSync('./data/data2.json', 'utf8'));
	const sortType = req.params.sortType;

	// Sort data based on the specified sort type (pavarde or vardas)
	if (sortType === 'pavarde') {
		data.sort((a, b) => a.pavarde.localeCompare(b.pavarde));
	} else if (sortType === 'vardas') {
		data.sort((a, b) => a.vardas.localeCompare(b.vardas));
	} else {
		// Handle other sorting types if needed
		res.status(400).json({ message: 'Invalid sort type', type: 'error' });
		return;
	}

	fs.writeFileSync('./data/data2.json', JSON.stringify(data));
	res.json({ message: 'Data sorted successfully', type: 'info' });
});

app.listen(port, () => {
	console.log(`Saskaitos klauso ${port} porto.`);
});
