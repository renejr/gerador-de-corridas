const { criarCorrida, cancelarCorrida, buscarCorridaPorId } = require('../models/corrida');

// Criação de corrida
const criar = (req, res) => {
  const { usuario, origem, destino } = req.body;

  if (!usuario || !origem || !destino) {
    return res.status(400).json({ error: 'Dados incompletos' });
  }

  criarCorrida(usuario, origem, destino, (err, id) => {
    if (err) return res.status(500).json({ error: 'Erro ao criar corrida' });
    res.status(201).json({ id, usuario, origem, destino, status: 'ativa' });
  });
};

// Cancelamento de corrida
const cancelar = (req, res) => {
  const corridaId = req.params.id;

  buscarCorridaPorId(corridaId, (err, corrida) => {
    if (err || !corrida) {
      return res.status(404).json({ error: 'Corrida não encontrada' });
    }

    cancelarCorrida(corridaId, (err, changes) => {
      if (err || changes === 0) {
        return res.status(500).json({ error: 'Erro ao cancelar corrida' });
      }
      res.status(200).json({ id: corridaId, status: 'cancelada' });
    });
  });
};

module.exports = { criar, cancelar };
