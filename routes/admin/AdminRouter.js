const adminRouter = require('express').Router();
const postsRouter = require('./PostsRouter');
const usersRouter = require('./UsersRouter');
const categoriesRouter = require('./CategoriesRouter');
const tagsRouter = require('./TagsRouter');

adminRouter.use('/posts', postsRouter);
adminRouter.use('/users', usersRouter);
adminRouter.use('/categories', categoriesRouter);
adminRouter.use('/tags', tagsRouter);

module.exports = adminRouter;
