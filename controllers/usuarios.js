const { response } = require('express');


const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const usuariosGet = (req = request, res = response) => {

    const { query, nombre = 'no name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - Controlador',
        query,
        nombre,
        apikey,
        page,
        limit
    });
}


const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}