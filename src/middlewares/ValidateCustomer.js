const validateCostumer = (req, res, next) => {
    const {nome, cpf, idade} = req.body;

    if (!nome || !cpf || !idade) {
        return res.status(400).json({
            msg: "Campos inválidos, revise.",
        });
    }

    return next();
};

const validateCostumertId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            msg: "Parametro incompleto",
        });
    }

    return next();
}

module.exports = { validateCostumer, validateCostumertId };