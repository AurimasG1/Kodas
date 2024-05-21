const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const fs = require('fs');
const md5 = require('md5');
const { v4: uuidv4 } = require('uuid');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'library',
});

const app = express();
const port = 80;

app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	})
);
app.use(cookieParser());
app.use(express.json({ limit: '12mb' }));
app.use(express.static('public'));
app.use(bodyParser.json());
connection.connect();

// files

const writeImage = imageBase64 => {
	if (!imageBase64) {
		return null;
	}
	let image;
	let type;
	if (imageBase64.indexOf('data:image/png;base64,') === 0) {
		type = 'png';
		image = Buffer.from(
			imageBase64.replace(/^data:image\/png;base64,/, ''),
			'base64'
		);
	} else if (imageBase64.indexOf('data:image/jpeg;base64,') === 0) {
		type = 'jpeg';
		image = Buffer.from(
			imageBase64.replace(/^data:image\/jpeg;base64,/, ''),
			'base64'
		);
	} else if (imageBase64.indexOf('data:image/jpg;base64,') === 0) {
		type = 'jpg';
		image = Buffer.from(
			imageBase64.replace(/^data:image\/jpg;base64,/, ''),
			'base64'
		);
	} else {
		res.status(500).send('Bad image format');
		return;
	}
	const filename = md5(uuidv4()) + '.' + type;
	fs.writeFileSync('public/images/' + filename, image);
	return filename;
};

const deleteImage = heroId => {
	let sql = 'SELECT image FROM heroes WHERE id = ?';
	connection.query(sql, [heroId], (err, results) => {
		if (err) {
			res.status;
		} else {
			if (results[0].image) {
				fs.unlinkSync('public/' + results[0].image);
			}
		}
	});
};

const checkUserisAuthorized = (user, res, roles) => {
	if (user && roles.includes(user.role)) {
		return true;
	} else if (user && roles.includes('self:' + user.id)) {
		return true;
	} else if (user) {
		res.status(401).json({
			message: 'Not authorized',
			type: 'role',
		});
	} else {
		res.status(401).json({
			message: 'Not logged in',
			type: 'login',
		});
	}
};

const doAuth = (req, res, next) => {
	const token = req.cookies.libSession || '';

	if (token === '') {
		return next();
	}

	const sql = `
	SELECT name, id, role
	FROM users
	WHERE session = ?
	`;

	connection.query(sql, token, (err, results) => {
		if (err) {
			res.status(500).json({ message: 'Server error on Auth' });
		} else {
			if (results.length > 0) {
				const user = results[0];
				req.user = user;
			}
		}
		return next();
	});
};

app.use(doAuth);

// FRONT OFFICE

app.get('/', (req, res) => {
	const sort = req.query.sort || '';
	let sql;

	if (sort === 'name_asc') {
		sql = `
		SELECT a.id, a.name, a.surname, b.id as book_id, b.title, b.pages, b.genre, h.id as hero_id, h.name as hero, good, h.url as heroUrl, b.url as bookUrl, b.rate
		FROM authors as a 
		LEFT JOIN books as b
		on a.id = b.author_id
		LEFT JOIN heroes as h
		on b.id = h.book_id
		ORDER BY a.surname, a.name`;
	} else if (sort === 'name_desc') {
		sql = `
		SELECT a.id, a.name, a.surname, b.id as book_id, b.title, b.pages, b.genre, h.id as hero_id, h.name as hero, good, h.url as heroUrl, b.url as bookUrl, b.rate
		FROM authors as a 
		LEFT JOIN books as b
		on a.id = b.author_id
		LEFT JOIN heroes as h
		on b.id = h.book_id
		ORDER BY a.surname DESC, a.name DESC`;
	} else {
		sql = `
		SELECT a.id, a.name, a.surname, b.id as book_id, b.title, b.pages, b.genre, h.id as hero_id, h.name as hero, good, h.url as heroUrl, b.url as bookUrl, b.rate
		FROM authors as a 
		LEFT JOIN books as b
		on a.id = b.author_id
		LEFT JOIN heroes as h
		on b.id = h.book_id`;
	}
	connection.query(sql, (err, results) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.json(results);
		}
	});
});

app.get('/hero/:slug', (req, res) => {
	const sql = `
	SELECT title, h.id, h.name, a.name as authorName, a.surname as authorSurname, good, title, book_id, image, h.url as heroUrl, b.url as bookUrl
	FROM heroes as h
	LEFT JOIN books as b
	ON h.book_id = b.id
	LEFT JOIN authors as a
	ON b.author_id = a.id
	WHERE h.url = ?
	`;
	connection.query(sql, [req.params.slug], (err, results) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.json(results[0]);
		}
	});
});

app.get('/book/:slug', (req, res) => {
	const sql = `
		SELECT b.id, title, pages, genre, a.name, surname, author_id, b.url AS bookUrl, h.url AS heroUrl, h.id AS hero_id, h.name AS hero, good, image
		FROM books AS b
		LEFT JOIN authors AS a
		ON b.author_id = a.id
		LEFT JOIN heroes AS h
		ON b.id = h.book_id
		WHERE b.url = ?
	`;
	connection.query(sql, [req.params.slug], (err, result) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.json(result);
		}
	});
});

app.get('/heroes-list', (req, res) => {
	let sql;
	let query;
	const inPage = 2;
	const page = req.query.page || 1;
	let filter = req.query.filter || '';
	let sort = req.query.sort || '';
	filter = filter === 'good' ? 1 : filter === 'bad' ? 0 : '';
	let total = 0;
	let totalPages = 0;

	if (filter === '') {
		sql = `SELECT COUNT(*) AS total 
		FROM heroes`;
		query = [];
	} else {
		sql = `
		SELECT COUNT(*) AS total 
		FROM heroes
		WHERE good = ? `;
		query = [filter];
	}
	connection.query(sql, query, (err, countResult) => {
		if (err) {
			res.status(500).send(err);
		} else {
			total = countResult[0].total;
			totalPages = Math.ceil(total / inPage);
		}
	});

	if (filter === '' && sort === '') {
		sql = `
		SELECT h.id, h.name, h.good, h.book_id, h.image, b.url, b.title
		FROM heroes AS h
		LEFT JOIN books AS b
		ON h.book_id = b.id
		LIMIT ?, ?
	    `;
		query = [(page - 1) * inPage, inPage];
	} else if (filter !== '' && sort === '') {
		sql = `
		SELECT h.id, h.name, h.good, h.book_id, h.image, b.url, b.title
		FROM heroes AS h
		LEFT JOIN books AS b
		ON h.book_id = b.id
		WHERE good = ?
		LIMIT ?, ? `;
		query = [filter, (page - 1) * inPage, inPage];
	} else if (filter === '' && sort !== '') {
		if (sort === 'name_asc') {
			sql = `
			SELECT h.id, h.name, h.good, h.book_id, h.image, b.url, b.title
		FROM heroes AS h
		LEFT JOIN books AS b
		ON h.book_id = b.id
			ORDER BY name
			LIMIT ?, ?
			`;
		} else if (sort === 'name_desc') {
			sql = `
			SELECT h.id, h.name, h.good, h.book_id, h.image, b.url, b.title
		FROM heroes AS h
		LEFT JOIN books AS b
		ON h.book_id = b.id
			ORDER BY name DESC
			LIMIT ?, ?
			`;
		} else {
			sql = `
			SELECT h.id, h.name, h.good, h.book_id, h.image, b.url, b.title
		FROM heroes AS h
		LEFT JOIN books AS b
		ON h.book_id = b.id
			LIMIT ?, ?
			`;
		}
		query = [(page - 1) * inPage, inPage];
	} else {
		if (sort === 'name_asc') {
			sql = `
			SELECT h.id, h.name, h.good, h.book_id, h.image, b.url, b.title
		FROM heroes AS h
		LEFT JOIN books AS b
		ON h.book_id = b.id
			WHERE good = ?
			ORDER BY name
			LIMIT ?, ?
			`;
		} else if (sort === 'name_desc') {
			sql = `
			SELECT h.id, h.name, h.good, h.book_id, h.image, b.url, b.title
		FROM heroes AS h
		LEFT JOIN books AS b
		ON h.book_id = b.id
			WHERE good = ?
			ORDER BY name DESC
			LIMIT ?,?
			`;
		} else {
			sql = `
			SELECT h.id, h.name, h.good, h.book_id, h.image, b.url, b.title
		FROM heroes AS h
		LEFT JOIN books AS b
		ON h.book_id = b.id
			WHERE good = ?
			LIMIT ?, ?
			`;
		}
		query = [filter, (page - 1) * inPage, inPage];
	}
	connection.query(sql, query, (err, result) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.json({ result, total, totalPages, page: +page });
		}
	});
});

app.get('/rating/:slug/:mark', (req, res) => {
	setTimeout(_ => {
		// fake delay

		const sql = `
	SELECT ratings
	FROM books
	WHERE url = ?
	`;
		connection.query(sql, [req.params.slug], (err, result) => {
			if (err) {
				res.status(500).send(err);
			} else {
				const ratings = JSON.parse(result[0].ratings);
				const userMark = ratings.find(item => item.mark === req.params.mark);
				const votes = ratings.length;
				const sum = ratings.reduce((acc, item) => acc + +item.rate, 0);
				const rate = +(sum / votes).toFixed(1);
				res.json({
					canRate: userMark === undefined ? true : false,
					rate,
					votes,
					sum,
				});
			}
		});
	}, 2000);
});

app.post('/rating/:id/:mark', (req, res) => {
	const { rate } = req.body;
	const mark = req.params.mark;
	const sql = `
	SELECT ratings
	FROM books
	WHERE id = ?
	`;
	connection.query(sql, [req.params.id], (err, result) => {
		if (err) {
			res.status(500).send(err);
		} else {
			const ratings = JSON.parse(result[0].ratings);
			ratings.push({ mark, rate });
			const newRatings = JSON.stringify(ratings);
			const votes = ratings.length;
			const sum = ratings.reduce((acc, item) => acc + +item.rate, 0);
			const newRate = +(sum / votes).toFixed(1);

			const sql = `
		UPDATE books
		SET ratings = ?, rate = ?
		WHERE id = ?
		`;
			connection.query(sql, [newRatings, newRate, req.params.id], err => {
				if (err) {
					res.status(500).send(err);
				} else {
					res.json({ success: true });
				}
			});
		}
	});
});

//login
app.post('/login', (req, res) => {
	const { username, password } = req.body;
	const sql = 'SELECT * FROM users WHERE name = ? AND PASSWORD = ?';
	connection.query(sql, [username, md5(password)], (err, results) => {
		if (err) {
			res.status(500).json({ message: 'Server error On Login' });
		} else {
			if (results.length > 0) {
				const token = md5(uuidv4());
				const sql = 'UPDATE users SET session = ? WHERE id = ?';
				connection.query(sql, [token, results[0].id], err => {
					if (err) {
						res.status(500).json({ message: 'Server error on Login' });
					} else {
						res.cookie('libSession', token, {
							maxAge: 1000 * 60 * 60 * 24 * 365,
							httpOnly: true,
						});
						res.json({
							success: true,
							name: results[0].name,
							role: results[0].role,
							id: results[0].id,
						});
					}
				});
			} else {
				res.status(401).json({ message: 'Invalid name or password' });
			}
		}
	});
});

//logout
app.post('/logout', (req, res) => {
	const token = req.cookies.libSession || '';
	const sql = 'UPDATE users set session = NULL WHERE session = ?';
	connection.query(sql, [token], err => {
		if (err) {
			res
				.status(500)
				.json({ message: { type: 'danger', text: 'Server error On Logout' } });
		} else {
			res.clearCookie('libSession');
			res.json({ message: { type: 'success', text: 'Logged out' } });
		}
	});
});

// router

app.get('/stats', (req, res) => {
	if (!checkUserisAuthorized(req.user, res, ['admin', 'user'])) {
		return;
	}

	const sql = `
	SELECT 'authors' AS name, COUNT(*) AS count, NULL AS stats
	FROM authors
	UNION
	SELECT 'books', COUNT(*), MAX(pages)
	FROM books
	UNION
	SELECT 'heroes', COUNT(*), SUM(good)
	FROM Heroes
	`;
	connection.query(sql, (err, results) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.json(results);
		}
	});
});

app.get('/authors', (req, res) => {
	if (!checkUserisAuthorized(req.user, res, ['admin', 'user'])) {
		return;
	}

	const sql = 'SELECT * FROM authors';
	connection.query(sql, (err, results) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.json(results);
		}
	});
});

app.get('/books', (req, res) => {
	if (!checkUserisAuthorized(req.user, res, ['admin', 'user'])) {
		return;
	}
	const sql = `
	SELECT b.id, title, pages, genre, name, surname, nickname, author_id
	FROM books as b
	LEFT JOIN authors as a 
	ON b.author_id = a.id`;
	connection.query(sql, (err, results) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.json(results);
		}
	});
});

app.get('/heroes', (req, res) => {
	if (!checkUserisAuthorized(req.user, res, ['admin', 'user'])) {
		return;
	}
	const sql = `
    SELECT h.id, h.name, a.name AS authorName, a.surname AS authorSurname, good, title, book_id, h.image
    FROM heroes as h
    LEFT JOIN books as b 
    ON h.book_id = b.id
    LEFT JOIN authors as a
    ON b.author_id = a.id
    ORDER BY h.id DESC
  `;
	connection.query(sql, (err, results) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.json(results);
		}
	});
});

app.post('/authors', (req, res) => {
	// res.status(403).json({ status: 'login' });
	// return;
	if (!checkUserisAuthorized(req.user, res, ['admin', 'user'])) {
		return;
	}
	const { name, surname, nickname, born } = req.body;
	if (!name || !surname || !born) {
		res.status(422).json({
			message: { type: 'danger', text: 'Name, surname and born are required.' },
		});
		return;
	}

	// const slug = title.toLowerCase().replace(/ /g, '-');
	const slug = name.toLowerCase() + '-' + surname.toLowerCase();

	const sql =
		'INSERT INTO authors (name, surname, nickname, born, url) VALUES (?, ?, ?, ?, ?)';
	connection.query(sql, [name, surname, nickname, born, slug], (err, result) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.json({
				success: true,
				id: result.insertId,
				uuid: req.body.id,
				message: { type: 'success', text: 'Nice! Author added!' },
			});
		}
	});
});

app.post('/books', (req, res) => {
	if (!checkUserisAuthorized(req.user, res, ['admin', 'user'])) {
		return;
	}
	// res.status(403).json({ status: 'login' });
	// return;
	const { title, pages, genre, author_id } = req.body;
	if (!title || !pages || !genre || !author_id) {
		res.status(422).json({
			message: {
				type: 'danger',
				text: 'Title, pages, genre and author are required.',
			},
		});
		return;
	}

	const slug = title.toLowerCase().replace(/ /g, '-');

	const sql =
		'INSERT INTO books (title, pages, genre, author_id, url) VALUES (?, ?, ?, ?, ?)';
	connection.query(sql, [title, pages, genre, author_id, slug], (err, result) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.json({
				success: true,
				id: result.insertId,
				uuid: req.body.id,
				message: { type: 'success', text: 'New book has been added' },
			});
		}
	});
});

app.post('/heroes', (req, res) => {
	if (!checkUserisAuthorized(req.user, res, ['admin', 'user'])) {
		return;
	}
	// res.status(403).json({ status: 'login' });
	// return;

	const filename = req.body.image ? writeImage(req.body.image) : null;

	const { name, good, book_id } = req.body;

	if (!name || ![0, 1].includes(good) || !book_id) {
		console.log(good);
		res.status(422).json({
			message: { type: 'danger', text: 'Name, good and book are required.' },
		});
		return;
	}

	const slug = name.toLowerCase().replace(/ /g, '-');

	const sql =
		'INSERT INTO heroes (name, good, book_id, image, url) VALUES (?, ?, ?, ?, ?)';
	connection.query(
		sql,
		[name, good, book_id, filename !== null ? '/images/' + filename : null, slug],
		(err, result) => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.json({
					success: true,
					id: result.insertId,
					uuid: req.body.id,
					message: { type: 'success', text: 'Great! New hero has arrived' },
				});
			}
		}
	);
});

app.put(`/authors/:id`, (req, res) => {
	if (!checkUserisAuthorized(req.user, res, ['admin', 'user'])) {
		return;
	}
	// res.status(403).json({ status: 'login' });
	// return;
	const { name, surname, nickname, born } = req.body;
	if (!name || !surname || !born) {
		res.status(422).json({
			message: { type: 'danger', text: 'Name, surname and born are required.' },
		});
		return;
	}

	const slug = name.toLowerCase() + '-' + surname.toLowerCase();

	const sql =
		'UPDATE authors SET name = ?, surname = ?, nickname = ?, born = ?, url = ? WHERE id = ?';
	connection.query(
		sql,
		[name, surname, nickname, born, slug, req.params.id],
		err => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.json({
					success: true,
					id: +req.params.id,
					message: { type: 'info', text: 'Nice! Author updated!' },
				});
			}
		}
	);
});

app.put(`/books/:id`, (req, res) => {
	if (!checkUserisAuthorized(req.user, res, ['admin', 'user'])) {
		return;
	}
	// res.status(403).json({ status: 'login' });
	// return;
	const { title, pages, genre, author_id } = req.body;
	if (!title || !pages || !genre || !author_id) {
		res.status(422).json({
			message: {
				type: 'danger',
				text: 'Title, pages, genre and author are required.',
			},
		});
		return;
	}

	const slug = title.toLowerCase().replace(/ /g, '-');

	const sql =
		'UPDATE books SET title = ?, pages = ?, genre = ?, author_id = ?, url = ? WHERE id = ?';
	connection.query(
		sql,
		[title, pages, genre, author_id, slug, req.params.id],
		err => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.json({
					success: true,
					id: +req.params.id,
					message: { type: 'info', text: 'The book has been updated!' },
				});
			}
		}
	);
});

app.put(`/heroes/:id`, (req, res) => {
	if (!checkUserisAuthorized(req.user, res, ['admin', 'user'])) {
		return;
	}
	// res.status(403).json({ status: 'login' });
	// return;
	if (req.body.del) {
		deleteImage(req.params.id);
	}
	const filename = writeImage(req.body.image);
	const { name, good, book_id } = req.body;
	if (!name || ![0, 1].includes(good) || !book_id) {
		console.log(good);
		res.status(422).json({
			message: { type: 'danger', text: 'Name, good and book are required.' },
		});
		return;
	}

	const slug = name.toLowerCase().replace(/ /g, '-');

	let sql;
	let params;
	if (req.body.del || filename !== null) {
		sql =
			'UPDATE heroes SET name = ?, good = ?, book_id = ?, image = ?, url = ? WHERE id =?';
		params = [
			name,
			good,
			book_id,
			filename !== null ? '/images/' + filename : null,
			slug,
			req.params.id,
		];
	} else {
		sql = 'UPDATE heroes SET name = ?, good = ?, book_id = ?, url = ? WHERE id = ?';
		params = [name, good, book_id, slug, req.params.id];
	}
	connection.query(sql, params, err => {
		if (err) {
			res.status(500).send(err);
			S;
		} else {
			res.json({
				success: true,
				id: +req.params.id,
				message: { type: 'info', text: 'The hero has been updated!' },
			});
		}
	});
});

app.delete(`/authors/:id`, (req, res) => {
	if (!checkUserisAuthorized(req.user, res, ['admin', 'user'])) {
		return;
	}
	// res.status(403).json({ status: 'login' });
	// return;
	const sql = 'DELETE FROM authors WHERE id = ?';
	connection.query(sql, [req.params.id], err => {
		if (err) {
			if (err.errno === 1451) {
				res.status(422).json({
					message: {
						type: 'danger',
						text: 'You can not delete this author. There are books assigned to him.',
					},
				});
			} else {
				res.status(500).send(err);
			}
		} else {
			res.json({
				status: 'login',
				success: true,
				id: +req.params.id,
				message: { type: 'danger', text: 'Good luck! Author deleted' },
			});
		}
	});
});

app.delete(`/books/:id`, (req, res) => {
	if (!checkUserisAuthorized(req.user, res, ['admin', 'user'])) {
		return;
	}
	// res.status(403).json({ status: 'login' });
	// return;
	let sql;

	sql = 'DELETE FROM books WHERE id = ?';
	connection.query(sql, [req.params.id], err => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.json({
				success: true,
				id: +req.params.id,
				message: {
					type: 'info',
					text: 'Bum! Book deleted! All heroes from this book gone!',
				},
			});
			sql = 'SELECT image FROM heroes WHERE book_id = ?';
			connection.query(sql, [req.params.id], (err, results) => {
				if (err) {
					res.status(500).send(err);
				} else {
					results.forEach(hero => {
						if (hero.image) {
							fs.unlinkSync('public/' + hero.image);
						}
					});
				}
			});
		}
	});
});

app.delete(`/heroes/:id`, (req, res) => {
	if (!checkUserisAuthorized(req.user, res, ['admin', 'user'])) {
		return;
	}
	// res.status(403).json({ status: 'login' });
	// return;

	deleteImage(req.params.id);

	sql = 'DELETE FROM heroes WHERE id = ?';
	connection.query(sql, [req.params.id], err => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.json({
				status: 'login',
				success: true,
				id: +req.params.id,
				message: { type: 'danger', text: 'So sad! The hero has been deleted' },
			});
		}
	});
});

app.listen(port, _ => {
	console.log(`KNYGŲ SERVERIS klauso ${port} porto.`);
});
