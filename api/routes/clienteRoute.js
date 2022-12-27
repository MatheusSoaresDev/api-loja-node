const { Router } = require('express')
const ClienteController = require('../controllers/ClienteController')

const router = Router()

router.post('/cliente', ClienteController.createCliente);

module.exports = router;
