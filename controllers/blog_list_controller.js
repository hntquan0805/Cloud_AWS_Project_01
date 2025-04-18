import db from '../models/index';
import { Op, where } from 'sequelize';
import CRUDService from '../services/CRUDService'

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

        res.json({ success: true, data: blogs });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).send("Internal Server Error");
    }
};

let tagBlogsApi = async (req, res) => {
    try {
        let { tag } = req.query;
        let whereCondition = {};

        if (tag) whereCondition.tag = tag;

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
            where: {
                tag: {
                    [Op.like]: `%${tag}%`
                }
            },
            group: ['blog.id']
        });

        res.json({ success: true, data: blogs });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).send("Internal Server Error");
    }
}

let createBlogsApi = (req, res) => {
    return res.render('create_blog.ejs');
}

let postCreatePostApi = async (req, res) => {
    try {
        let message = await CRUDService.createNewPost(req.body);
        console.log("New post created:", message);
        return res.redirect('/blog');
    } catch (error) {
        console.error("Error creating post:", error);
        return res.status(500).send("Internal Server Error");
    }
}

let deletePostApi = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deletePostByID(id);
        return res.redirect('/blog');
    }
    else {
        return res.send('Post not found!');
    }
    
}

export default {
    getAllBlogs,
    filterBlogsApi,
    tagBlogsApi,
    createBlogsApi,
    postCreatePostApi,
    deletePostApi,
};