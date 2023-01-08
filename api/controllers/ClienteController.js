const model = require("../models");
const chalk = require('chalk')


class ClienteController
{
    static async createCliente(req, res) {
        try {
            const cliente = await model.Cliente.create(req.body);
            console.log(chalk.blue("cliente cadastrado com sucesso!"))
            return res.status(200).json(cliente);
        } catch (error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClienteController;
