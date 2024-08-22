const Costumer = require("../models/Customer");

const CustomerController = {
    create: async (req, res) => {
        try{
            const {nome, cpf, idade} = req.body;

            const customerCriado = await Customer.create({nome, cpf, idade});

            return res.status(200).json({
                msg: "Cliente criado com sucesso!",
                costumer: customerCriado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    update: async (req, res) => {
        try{
            const {id} = req.params;
            const {nome, cpf, idade} = req.body;

            console.log("Atualizando objeto");
            console.log({id});
            console.log({nome, cpf, idade});

            const costumerUpdate = await Product.findByPk(id);

            if(costumerUpdate == null) {
                return res.status(404).json({
                    msg: "Cliente não encontrado"
                })
            }

            const updated = await productUpdate.update({
                nome, cpf, idade
            });

            if(updated) {
                return res.status(200).json({
                msg: "Cliente atualizado com sucesso!",
                });
            }

            return res.status(500).json({
                msg: "Erro ao atualizar cliente"
            });
        } catch(error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    getAll: async (req, res) => {
        try{
            const clientes = await Customer.findAll();
            return res.status(200).json({
                msg: "Clientes encontrados!",
                clientes
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    getOne: async (req, res) => {
        const { id } = req.params;
        const clienteEncontrado = await Costumer.findByPk(id);

        if(clienteEncontrado == null) {
            return res.status(404).json({
                msg: "Cliente nao encontrado!"
            })
        }

        try{
            return res.status(200).json({
                msg: "Cliente encontrado com sucesso!",
                usuario: clienteEncontrado
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    delete: async (req, res) => {
        try{
            const { id } = req.params;

            const costumerFinded = await costumer.findByPk(id);

            if(costumerFinded == null) {
                return res.status(404).json({
                    msg: "Cliente não encontrado"
                })
            }
           
            await costumerFinded.destroy(); 

            return res.status(200).json({
                msg:"Cliente deletado com sucesso!"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    }
}

module.exports = CustomerController;



