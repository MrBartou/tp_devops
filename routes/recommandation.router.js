const router = require('express').Router();

const recommandationController = require('../controllers/recommandation.controllers');
const userMiddleware = require('../middlewares/users.middlewares');
router.get('/', userMiddleware, recommandationController.getRecommandation);

module.exports = router;