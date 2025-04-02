import express from 'express';
const router = express.Router();
import blogController from '../controllers/blog_list_controller'

let initBlogList = (app) => {
    router.get('/', blogController.getAllBlogs);

    return app.use("/blog", router);
}

module.exports = initBlogList;
