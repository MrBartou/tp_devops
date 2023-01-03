const router = require('express').Router();
const seriesController = require('../controllers/series.controllers');
const userMiddleware = require('../middlewares/users.middlewares');
router.get('/', userMiddleware, seriesController.getSeries);

module.exports = router;