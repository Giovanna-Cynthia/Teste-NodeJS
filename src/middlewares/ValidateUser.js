/* Nome, Email, senha  
- req: request
- res: response
- next: nextFunction*/

const validateUser = (req, res, next) => {
    const { nome, email, senha } = req.body;

    // ! -> diferente
    // preenchido | não preenchido
    if (!nome || !email || !senha) {
        return res.status(400).json({
            msg: "Campos inválidos, revise.",
        });
    }
    // esta indicando que esta tudo certo, e ele pode avançar
    return next();
};

const validateUserId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            msg: "Parametro faltando",
        });
    }

    return next();
};

module.exports = { validateUser, validateUserId };