const db = require('../models');
const bcrypt = require('bcryptjs');
const tokenService = require('../services/token.js')

exports.signin = async (req, res, next) => {
    try {
        let user = await db.Usuario.findOne({ where: { email: req.body.email} })
        if (user) {
            let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {
                let tokenReturn = await tokenService.encode(user);
                res.status(200).send({ user, tokenReturn});
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
