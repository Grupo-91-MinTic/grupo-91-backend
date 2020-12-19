const routerx = require('express-promise-router');
const usuarioController = require('../controllers/usuarios-controller');
const auth = require('../middlewares/auth');

const router = routerx();


router.post('/login', usuarioController.signin);
router.get('/list',auth.verifyUsuario , usuarioController.list);
router.post('/add',auth.verifyUsuario , usuarioController.add);
router.put('/update',auth.verifyUsuario , usuarioController.update);
router.put('/activate',auth.verifyUsuario , usuarioController.activate);
router.put('/deactivate',auth.verifyUsuario , usuarioController.deactivate);


module.exports = router;
