const User = require("../models/user");
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

const UserController = {

    login: async (req, res) => {
        try{
            const { email, senha } = req.body;
            
            const user = await User.findOne({ where: {email } });

            if(!user) {
                return res.status(400).json({
                    msg: 'Email ou senha incorretos'
                });
            };

            const isValida = await bcrypt.compare(senha, user.senha);
            if(!isValida) {
                return res.status(400).json({
                    msg: 'Email ou senha incorretos'
                });
            };

            const token = jwt.sign({ email: user.email, 
                name: user.nome 
            }, process.env.SECRET, {expiresIn: '1h'});

            return res.status(200).json({
                msg: 'Login realizado!',
                token
            })
        } catch(error) {
            console.error(error);
            return res.status(500).json({msg: "Acione o Suporte"});
        }
    },


    create: async (req, res) => {
        try{
            const {nome, senha, email} = req.body;
                                            //10 Sal - maximo é 12
            const hashSenha = await bcrypt.hash(senha, 10)

            const userCriado = await User.create({nome, senha: hashSenha, email});
            

            return res.status(200).json({
                msg: "Usuario criado com sucesso!",
                user: userCriado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },
    
    update: async (req, res) => {
        try{
            const {id} = req.params; //usuario/aualizar/423423423
            const {nome, senha, email} = req.body;

            console.log("Atualizando objeto");
            console.log({id});
            console.log({nome, senha, email});

            const userUpdate = await User.findByPk(id);

            if(userUpdate == null) {
                return res.status(404).json({
                    msg: "Usuario não encontrado"
                })
            }

            const updated = await userUpdate.update({
                nome, senha, email
            });

            if(updated) {
                return res.status(200).json({
                    msg: "Usuario atualizado com sucesso!",
                });
            }

            return res.status(500).json({
                msg: "Erro ao atualizar usuario"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    getAll: async (req, res) => {
        try{
            const usuarios = await User.findAll();
            return res.status(200).json({
                msg: "Usuarios encontrados!",
                usuarios
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    getOne: async (req, res) => {
        const { id } = req.params;
        //PK -> primary key
        const usuarioEncontrado = await User.findByPk(id);

        if(usuarioEncontrado == null) {
            return res.status(404).json({
                msg: "Usuario nao encontrado!"
            })
        }

        try{
            return res.status(200).json({
                msg: "Usuario encontrado com sucesso!",
                usuario: usuarioEncontrado
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    delete: async (req, res) => {
        try{
            const { id } = req.params;

            const userFinded = await user.findByPk(id);

            if(userFinded == null) {
                return res.status(404).json({
                    msg: "Usuario não encontrado"
                })
            }
            //Destruindo -> Deletando
            //As same it deleted
            await userFinded.destroy(); 

            return res.status(200).json({
                msg:"Usuario deletado com sucesso!"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    }
}

module.exports = UserController;