const router = require('express').Router();
const filmsController = require('../controllers/film.controllers');
const userMiddleware = require('../middlewares/users.middlewares');
router.get('/', userMiddleware, filmsController.getFilms);

module.exports = router;