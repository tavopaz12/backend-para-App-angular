//rutas para productos
const express = require('express')
const router = express()
const productoController = require('../controllers/productoController')

//API Productos
router.post('/', productoController.crearProdcuto)
router.get('/', productoController.obtenerProductos)
router.put('/:id', productoController.actualizarProdcuto)
router.get('/:id', productoController.obtenerProducto)
router.delete('/:id', productoController.eliminarProducto)


module.exports = router