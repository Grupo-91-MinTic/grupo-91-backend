var jwt = require('jsonwebtoken');
const models = require('../models');


module.exports = {

    //generar el token
    encode: async(id, rol) => {
        let token = jwt.sign({
            id: id,
            rol: rol
        }, 'config.secret', {
            expiresIn: 3600
        });
        return token;
    },
    //permite decodificar el token
    decode: async(token) => {
        try {
            let { id } = await jwt.verify(token, 'config.secret');
            let Usuario = await models.Usuario.findOne({ where: {
                id: id.id
            }})
            if ( Usuario ){
                return Usuario;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }

    }
}