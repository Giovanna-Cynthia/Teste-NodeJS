const validateProduct = (req, res, next) => {
    const {nome, preco, quantidade} = req.body;

    if (!nome || !preco || !quantidade) {
        return res.status(400).json({
            msg: "Campos inválidos, revise.",
        });
    }

    return next();
};

const validateProductId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            msg: "Parametro incompleto",
        });
    }

    return next();
}

module.exports = { validateProduct, validateProductId };