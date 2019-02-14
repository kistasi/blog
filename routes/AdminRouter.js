const adminRouter = require('express').Router();
const postsController = require('../controllers/admin/PostsController');
const usersController = require('../controllers/admin/UsersController');
const tagsController = require('../controllers/admin/TagsController');
const categoriesController = require('../controllers/admin/CategoriesController');

// Posts
adminRouter.get('/posts/index', postsController.index);
adminRouter.get('/posts/create', postsController.create);
adminRouter.post('/posts/store', postsController.store);
adminRouter.get('/posts/:id', postsController.show);
adminRouter.get('/posts/edit/:id', postsController.edit);
adminRouter.post('/posts/update', postsController.update);
adminRouter.get('/posts/:id/delete', postsController.destory);

// Users
adminRouter.get('/users/index', usersController.index);
adminRouter.get('/users/create', usersController.create);
adminRouter.post('/users/store', usersController.store);
adminRouter.get('/users/:id', usersController.show);
adminRouter.get('/users/edit/:id', usersController.edit);
adminRouter.post('/users/update', usersController.update);
adminRouter.get('/users/:id/delete', usersController.destory);

// Tags
adminRouter.get('/tags/index', tagsController.index);
adminRouter.get('/tags/create', tagsController.create);
adminRouter.post('/tags/store', tagsController.store);
adminRouter.get('/tags/:id', tagsController.show);
adminRouter.get('/tags/edit/:id', tagsController.edit);
adminRouter.post('/tags/update', tagsController.update);
adminRouter.get('/tags/:id/delete', tagsController.destory);

// Categories
adminRouter.get('/categories/index', categoriesController.index);
adminRouter.get('/tagcategoriess/create', categoriesController.create);
adminRouter.post('/categories/store', categoriesController.store);
adminRouter.get('/categories/:id', categoriesController.show);
adminRouter.get('/categories/edit/:id', categoriesController.edit);
adminRouter.post('/categories/update', categoriesController.update);
adminRouter.get('/categories/:id/delete', categoriesController.destory);

module.exports = adminRouter;
