const frontRouter = require('express').Router();
const postsController = require('../controllers/front/posts-controller');

frontRouter.get('/', postsController.index);

module.exports = frontRouter;
