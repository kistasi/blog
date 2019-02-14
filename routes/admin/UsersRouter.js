const adminUsersRouter = require('express').Router();
const postsController = require('../../controllers/admin/UsersController');

adminUsersRouter.get('/index', postsController.index);
adminUsersRouter.get('/create', postsController.create);
adminUsersRouter.post('/store', postsController.store);
adminUsersRouter.get('/:id', postsController.show);
adminUsersRouter.get('/edit/:id', postsController.edit);
adminUsersRouter.post('/update', postsController.update);
adminUsersRouter.get('/:id/delete', postsController.destory);

module.exports = adminUsersRouter;
