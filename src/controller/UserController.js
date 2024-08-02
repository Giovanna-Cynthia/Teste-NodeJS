const UserController = {
    create: async (req, res) => {
        try{
            const {nome, idade, senha, email} = req.body;

            console.log({nome, idade, senha, email});

            return res.status(200).json({
                msg: 'Usuario criado com sucesso!'
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },
    update: async (req, res) => {
        try{
            const {id} = req.params; //usuario/aualizar/423423423
            const {nome, idade, senha, email} = req.body;

            console.log("Atualizando objeto");
            console.log({id});
            console.log({nome, idade, senha, email});

            return res.status(200).json({
                msg: 'Usuario atualizado com sucesso!'
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },
    getAll: async (req, res) => {
        try{
            return res.status(200).json({
                msg: 'Usuarios encontrados!',
                usuarios: []
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },
    getOne: async (req, res) => {
        try{
            return res.status(200).json({
                msg: 'Usuario encontrado com sucesso!',
                usuario: {}
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },
    delete: async (req, res) => {
        try{
            return res.status(200).json({
                msg:'Usuario deletado com sucesso!'
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte'});
        }
    }
}

module.exports = UserController;