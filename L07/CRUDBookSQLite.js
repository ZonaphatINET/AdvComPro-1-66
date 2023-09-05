// SQLite3 CRUD operations
// npm install express sqlite3
// Create a Bood.sqlite database in the Database folder
// Run this file with node CRUDBookSQLite.js
// TESt with Postman
const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

const db = new sqlite3.Database('./Database/Book.sqlite');

app.use(express.json());

db.run('CREATE TABLE IF NOT EXISTS Books (id INTEGER PRIMARY KEY, title TEXT, author TEXT)');

app.get('/books', (req, res) => {
    db.all('SELECT * FROM Book', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.get('/books/:id', (req, res) => {
    db.get('SELECT * FROM Book WHERE id = ?', req.params.id, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            if (!row) {
                res.status(404).json({ error: 'Book not found' });
            } else {
                res.json(row);
            }
        }
    });
});

app.post('/books', (req, res) => {
    const book = req.body;
    if (!book.title || !book.author || !book.price) {
        res.status(400).json({ error: 'Invalid request' });
        return;
    }
    db.run('INSERT INTO Book (title, author, price) VALUES (?, ?, ?)', [book.title, book.author, book.price], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            book.id = this.lastID;
            res.status(201).json(book);
        }
    });
});

app.put('/books/:id', (req, res) => {
    const book = req.body;
    db.run('UPDATE Book SET title = ?, author = ?, price = ? WHERE id = ?', [book.title, book.author, book.price, req.params.id], function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(book);
        }
    });
});

app.delete('/books/:id', (req, res) => {
    db.run('DELETE FROM Book WHERE id = ?', req.params.id, function(err) {
        if (err) {
            res.status(500).send({ err});
        } else {
            res.send({});
        }
    });
});