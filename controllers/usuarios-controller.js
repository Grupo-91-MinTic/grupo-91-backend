const db = require('../models');
const bcrypt = require('bcryptjs');
const tokenService = require('../services/token.js')

exports.signin = async (req, res, next) => {
    try {
        let Usuario = await db.Usuario.findOne({ where: { email: req.body.email} })
        if (Usuario) {
            let passwordIsValid = bcrypt.compareSync(req.body.password, Usuario.password);
            if (passwordIsValid) {
                let tokenReturn = await tokenService.encode(Usuario);
                res.status(200).send({ Usuario, tokenReturn});
            } else {
                res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
            }
        } else {
            res.status(404).send('User Not Found.');
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error' + error
        });
        next(error);
    }
};
