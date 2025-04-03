import db from '../models/index';
import { Op, where } from 'sequelize';

let getAllBlogs = async (req, res) => {
    try {
        const blogs = await db.blog.findAll({
            attributes: [
                'id', 'author', 'title', 'content', 'day', 'month', 'year', 'tag',
                [db.Sequelize.fn('COUNT', db.Sequelize.col('comment.id')), 'commentCount']
            ],
            include: [
                {
                    model: db.comment,
                    as: 'comment',
                    attributes: []
                }
            ],
            group: ['blog.id'] 
        });
        res.render('blog_list', { blogs });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).send("Internal Server Error");
    }
};

let filterBlogsApi = async (req, res) => {
    try {
        let { day, month, year } = req.query;
        let whereCondition = {};

        if (day) whereCondition.day = day;
        if (month) whereCondition.month = month;
        if (year) whereCondition.year = year;

        console.log("whereCondition", whereCondition);
        const blogs = await db.blog.findAll({
            attributes: [
                'id', 'author', 'title', 'content', 'day', 'month', 'year', 'tag',
                [db.Sequelize.fn('COUNT', db.Sequelize.col('comment.id')), 'commentCount']
            ],
            include: [
                {
                    model: db.comment,
                    as: 'comment',
                    attributes: []
                }
            ],
            where: whereCondition,
            group: ['blog.id']
        });
        console.log("blogs", blogs);

        res.json({ success: true, data: blogs });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).send("Internal Server Error");
    }
};

export default {
    getAllBlogs,
    filterBlogsApi
};