import express from 'express';
const router = express.Router();
import blogController from '../controllers/blog_list_controller'

let initBlog = (app) => {
    router.get('/', blogController.getAllBlogs);

    router.get('/filter', blogController.filterBlogsApi);

    return app.use("/blog", router);
}

module.exports = initBlog;