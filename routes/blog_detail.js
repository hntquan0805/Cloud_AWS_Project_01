import express from 'express';
const router = express.Router();
import blogDetailController from '../controllers/blog_detail_controller'

let initBlogDetail = (app) => {
    router.get('/', blogDetailController.getAllBlogs);

    return app.use("/blog_detail", router);
}

module.exports = initBlogDetail;
