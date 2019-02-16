const adminTagsRouter = require('express').Router();
const tagsController = require('../../controllers/admin/tags-controller');

adminTagsRouter.get('/', tagsController.list);
adminTagsRouter.post('/create', tagsController.create);
adminTagsRouter.post('/:id/update', tagsController.update);
adminTagsRouter.delete('/:id/delete', tagsController.delete);

module.exports = adminTagsRouter;
