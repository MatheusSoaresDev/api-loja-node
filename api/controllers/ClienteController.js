const model = require("../models");
class ClienteController
{
    static async createCliente(req, res) {
        try {
            const cliente = await model.Cliente.create(req.body);
            return res.status(200).json(cliente);
        } catch (error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClienteController;
