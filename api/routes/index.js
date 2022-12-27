const bodyParser = require('body-parser')

const cliente = require('./clienteRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        cliente,
    )
}