const router = require('express').Router();
const favorisController = require('../controllers/favoris.controllers');
const userMiddleware = require('../middlewares/users.middlewares');

router.get('/:id', userMiddleware, favorisController.getFavorisById);
router.post('/', userMiddleware, favorisController.addFavoris);
router.put('/', userMiddleware, favorisController.updateFavoris);
router.delete('/', userMiddleware, favorisController.deleteFavoris);

module.exports = router;