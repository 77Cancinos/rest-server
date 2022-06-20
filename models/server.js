const express = require('express');
var cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //Ruta
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    middlewares() {
        //Cors
        this.app.use(cors());

        //Lectura y parseo  del body
        this.app.use(express.json());

        //Directorio publico     
        //el .use significa que es un middleware
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;