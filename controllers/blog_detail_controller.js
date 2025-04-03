import db from '../models/index';
import { Op } from 'sequelize';

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await db.blog.findAll();
        res.render('blog_detail', { blogs });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).send("Internal Server Error");
    }
};
