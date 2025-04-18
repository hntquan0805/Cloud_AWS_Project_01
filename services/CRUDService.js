
import db from '../models/index';

let createNewPost = async (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            await db.blog.create({
                author: data.author,
                title: data.title,
                content: data.content,
                day: data.day,
                month: data.month,
                year: data.year,
                tag: data.tag
            })

            resolve('OK! CREATE A NEW POST SUCCEED!')

        } catch(e) {
            reject(e);
        }

    })
}

let deletePostByID = (postID) => {
    return new Promise(async(resolve, reject) => {
        try {
            let post = await db.blog.findOne({
                where: {id: postID}
            })

            if(post) {
                await post.destroy();
            }

            resolve();
        } catch(e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewPost,
    deletePostByID,
}