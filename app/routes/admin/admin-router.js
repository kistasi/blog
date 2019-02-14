const adminRouter = require('express').Router();
const postsRouter = require('./posts-router');
const usersRouter = require('./users-router');
const categoriesRouter = require('./categories-router');
const tagsRouter = require('./tags-router');

adminRouter.use('/posts', postsRouter);
adminRouter.use('/users', usersRouter);
adminRouter.use('/categories', categoriesRouter);
adminRouter.use('/tags', tagsRouter);

module.exports = adminRouter;
