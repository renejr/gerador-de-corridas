const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // Banco em memória

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS corridas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario TEXT NOT NULL,
    origem TEXT NOT NULL,
    destino TEXT NOT NULL,
    status TEXT NOT NULL
  )`);
});

module.exports = db;
