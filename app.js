// Requires
const express = require('express')
const bodyParser = require('body-parser')
const socketIO = require('socket.io')
const http = require('http')


// Inicializacion
const app = express()
let server = http.createServer(app)


let io = socketIO(server)

//Cargar Rutas
const userRoutes = require('./routes/userRoute')

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Cors

//Rutas
app.use('/api', userRoutes)

module.exports = server
