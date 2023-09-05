// SQLite3 CRUD operations
// npm install express sqlite3
// Create a Bood.sqlite database in the Database folder
// Run this file with node CRUDBookSQLite.js
// TESt with Postman

const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

// connect to the database
const db = new sqlite3.Database('./Database/Book.sqlite');

// parse incoming requests
app.use(express.json());

// create books table if it doesn't exist
db.run('CREATE TABLE IF NOT EXISTS Books (id INTEGER PRIMARY KEY, title TEXT, author TEXT)');





// route to get all books
app.get('/books', (req, res) => {
    db.all('SELECT * FROM Book', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// route to get book by id
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

// route to create a new book
app.post('/books', (req, res) => {
    const book = req.body;
    db.run('INSERT INTO Book (title, author, price) VALUES (?, ?)', [book.title, book.author, book.price], function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            book.id = this.lastID;
            res.send(book);
        }
    });
});

// route to update book
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

// route to delete book
app.delete('/books/:id', (req, res) => {
    db.run('DELETE FROM Book WHERE id = ?', req.params.id, function(err) {
        if (err) {
            res.status(500).send({ err});
        } else {
            res.send({});
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
