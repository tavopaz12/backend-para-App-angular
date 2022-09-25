const Producto = require("../models/Producto");

// Crear Producto
exports.crearProdcuto = async(req, res) => {
    try {
        let producto;

        // creamos nuestro producto
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');

    }
}

// obtener todos los productos
exports.obtenerProductos = async(req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


//modificar producto
exports.actualizarProdcuto = async(req, res) => {
    try {
        const {
            nombre,
            categoria,
            ubicacion,
            precio
        } = req.body;

        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }

        producto.nombre = nombre
        producto.categoria = categoria
        producto.ubicacion = ubicacion
        producto.precio = precio

        producto = await Producto.findByIdAndUpdate({
            _id: req.params.id
        }, producto, {
            new: true
        })
        res.json(producto)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

// Obtener un solo producto
exports.obtenerProducto = async(req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }
        res.json(producto);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

//Eliminar producto
exports.eliminarProducto = async(req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({
                msg: 'No existe el producto'
            })
        }
        await Producto.findByIdAndRemove({
            _id: req.params.id
        })

        res.json({
            msg: 'Producto eliminado correctamente'
        });

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}