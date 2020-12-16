const routerx = require('express-promise-router');
const usuarioController = require('../controllers/usuarios-controller');
const auth = require('../middlewares/auth');

const router = routerx();


router.post('/login', usuarioController.signin);


module.exports = router;
