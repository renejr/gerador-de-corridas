const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, '../logs');
const logFilePath = path.join(logDir, 'app.log');

// Verifica se a pasta 'logs' existe, caso contrário, cria a pasta
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = (req, res, next) => {
  const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

  // Registra o log no arquivo
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) console.error('Erro ao salvar log:', err);
  });

  next();
};

module.exports = logger;
