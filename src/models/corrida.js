const db = require('../db/sqlite');

// Função para criar uma corrida
const criarCorrida = (usuario, origem, destino, callback) => {
  const query = `INSERT INTO corridas (usuario, origem, destino, status) VALUES (?, ?, ?, 'ativa')`;
  db.run(query, [usuario, origem, destino], function (err) {
    callback(err, this.lastID);
  });
};

// Função para cancelar uma corrida
const cancelarCorrida = (id, callback) => {
  const query = `UPDATE corridas SET status = 'cancelada' WHERE id = ? AND status = 'ativa'`;
  db.run(query, [id], function (err) {
    callback(err, this.changes);
  });
};

// Função para buscar uma corrida
const buscarCorridaPorId = (id, callback) => {
  const query = `SELECT * FROM corridas WHERE id = ?`;
  db.get(query, [id], (err, row) => {
    callback(err, row);
  });
};

module.exports = { criarCorrida, cancelarCorrida, buscarCorridaPorId };
