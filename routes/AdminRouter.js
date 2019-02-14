const adminRouter = require('express').Router();
const postsController = require('../controllers/admin/PostsController');

adminRouter.get('/', postsController.index);

module.exports = adminRouter;
