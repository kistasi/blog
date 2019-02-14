const frontRouter = require('express').Router();
const postsController = require('../controllers/front/PostsController');

frontRouter.get('/', postsController.index);

module.exports = frontRouter;
