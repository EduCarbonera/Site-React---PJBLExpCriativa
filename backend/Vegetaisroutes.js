const express = require('express')
const router = express.Router()
const vegetaisController = require('../controllers/vegetaisController')
 
// define qual função do controller cada rota vai chamar
router.get('/', vegetaisController.listar)
router.get('/:id', vegetaisController.buscarPorId)
router.post('/', vegetaisController.cadastrar)
router.put('/:id', vegetaisController.atualizar)
router.delete('/:id', vegetaisController.deletar)
 
module.exports = router