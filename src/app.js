const express = require('express');
const corridaRoutes = require('./routes/corridaRoutes');
const logger = require('./middlewares/logger');

const app = express();
app.use(express.json());
app.use(logger);  // Usa o middleware de logs

app.use('/', corridaRoutes);

module.exports = app; // Exporta o app sem iniciar o servidor
