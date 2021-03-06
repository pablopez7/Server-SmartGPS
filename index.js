'use strict'

const mongoose = require('mongoose')
const server = require('./app')
const config = require('./config')

mongoose.Promise = global.Promise
mongoose.connect(config.db, { useNewUrlParser: true })
    .then(() => {
        console.log('\x1b[32m%s\x1b[0m', `La conexion a la base de datos '${config.dbName}' se ha realizado con exito`)

        server.listen(config.port, () => {
            console.log('\x1b[37m%s\x1b[37m', `API RESTFull '${config.projName}' corriendo en http://localhost:${config.port}`)
        })
    })
    .catch(err => console.log(`Error al conectarse a la Base de Datos ${err}`))