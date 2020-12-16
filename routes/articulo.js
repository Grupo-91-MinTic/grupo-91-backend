const routerx = require('express-promise-router');
const articuloController = require('../controllers/articulos-controller');
const auth = require('../middlewares/auth');

const router = routerx();


router.post('/add', articuloController.add);
router.get('/query', articuloController.query);
router.get('/list', articuloController.list);
router.put('/update', articuloController.update);
router.delete('/remove', articuloController.remove);
router.put('/activate', articuloController.activate);
router.put('/deactivate', articuloController.deactivate);


module.exports = router;