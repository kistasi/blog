const adminCategoriesRouter = require('express').Router();
const categoriesController = require('../../controllers/admin/CategoriesController');

adminCategoriesRouter.get('/index', categoriesController.index);
adminCategoriesRouter.get('/create', categoriesController.create);
adminCategoriesRouter.post('/store', categoriesController.store);
adminCategoriesRouter.get('/:id', categoriesController.show);
adminCategoriesRouter.get('/edit/:id', categoriesController.edit);
adminCategoriesRouter.post('/update', categoriesController.update);
adminCategoriesRouter.get('/:id/delete', categoriesController.destory);

module.exports = adminCategoriesRouter;
