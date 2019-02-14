const adminPostsRouter = require('express').Router();
const postsController = require('../../controllers/admin/posts-controller');

adminPostsRouter.get('/index', postsController.index);
adminPostsRouter.get('/create', postsController.create);
adminPostsRouter.post('/store', postsController.store);
adminPostsRouter.get('/:id', postsController.show);
adminPostsRouter.get('/edit/:id', postsController.edit);
adminPostsRouter.post('/update', postsController.update);
adminPostsRouter.get('/:id/delete', postsController.destory);

module.exports = adminPostsRouter;
