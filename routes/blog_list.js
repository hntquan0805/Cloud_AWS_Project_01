import express from 'express';
const router = express.Router();
import blogController from '../controllers/blog_list_controller'

let initBlog = (app) => {
    router.get('/', blogController.getAllBlogs);

    router.get('/filter', blogController.filterBlogsApi);

    router.get('/tag', blogController.tagBlogsApi);

    router.get('/create',blogController.createBlogsApi);

    router.post('/post-createPost', blogController.postCreatePostApi);

    router.get('/delete-post', blogController.deletePostApi);

    return app.use("/blog", router);
}

module.exports = initBlog;