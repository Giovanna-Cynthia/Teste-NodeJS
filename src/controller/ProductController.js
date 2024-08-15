const Product = require("../models/Product");

const ProductController = {
    create: async (req, res) => {
        try{
            const {nome, preco, quantidade} = req.body;

            const productCriado = await Product.create({nome, preco, quantidade});

            return res.status(200).json({
                msg: "Produto criado com sucesso!",
                user: productCriado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    update: async (req, res) => {
        try{
            const {id} = req.params; //usuario/atualizar/423423423
            const {nome, preco, quantidade} = req.body;

            console.log("Atualizando objeto");
            console.log({id});
            console.log({nome, preco, quantidade});

            const productUpdate = await Product.findByPk(id);

            if(productUpdate == null) {
                return res.status(404).json({
                    msg: "Produto não encontrado"
                })
            }

            const updated = await productUpdate.update({
                nome, preco, quantidade
            });

            if(updated) {
                return res.status(200).json({
                    msg: "Produto atualizado com sucesso!",
                });
            }

            return res.status(500).json({
                msg: "Erro ao atualizar produto"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    getAll: async (req, res) => {
        try{
            const produtos = await Product.findAll();
            return res.status(200).json({
                msg: "Produtos encontrados!",
                produtos
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    getOne: async (req, res) => {
        const { id } = req.params;
        //PK -> primary key
        const produtoEncontrado = await Product.findByPk(id);

        if(produtoEncontrado == null) {
            return res.status(404).json({
                msg: "Produto nao encontrado!"
            })
        }

        try{
            return res.status(200).json({
                msg: "Produto encontrado com sucesso!",
                usuario: produtoEncontrado
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    delete: async (req, res) => {
        try{
            const { id } = req.params;

            const productFinded = await product.findByPk(id);

            if(productFinded == null) {
                return res.status(404).json({
                    msg: "Produto não encontrado"
                })
            }
           
            await productFinded.destroy(); 

            return res.status(200).json({
                msg:"Produto deletado com sucesso!"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    }
}

module.exports = ProductController;