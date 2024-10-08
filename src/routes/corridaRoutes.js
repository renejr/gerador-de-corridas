const express = require('express');
const { criar, cancelar } = require('../controllers/corridaController');
const router = express.Router();

router.post('/corridas', criar);
router.delete('/corridas/:id', cancelar);

module.exports = router;
