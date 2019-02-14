const adminTagsRouter = require('express').Router();
const tagsController = require('../../controllers/admin/tags-controller');

adminTagsRouter.get('/index', tagsController.index);
adminTagsRouter.get('/create', tagsController.create);
adminTagsRouter.post('/store', tagsController.store);
adminTagsRouter.get('/:id', tagsController.show);
adminTagsRouter.get('/edit/:id', tagsController.edit);
adminTagsRouter.post('/update', tagsController.update);
adminTagsRouter.get('/:id/delete', tagsController.destory);

module.exports = adminTagsRouter;
