
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

let getPostByID = (postID) => {
    return new Promise(async (resolve, reject) => {
        try{
            let post = await db.blog.findOne ({
                where: {id: postID},
                raw: true
            })

            if(post){
                resolve(post);
            }
            else{
                resolve({});
            }
        } catch(e) {
            reject (e);
        }
    })
}

let updatePostData = async (editedPostData) => {
    return new Promise (async (resolve, reject) => {
        try {
            let post = await db.blog.findOne ({
                where: {id: editedPostData.id}
            })

            if (post){
                post.title = editedPostData.title;
                post.content = editedPostData.content;
                post.tag = editedPostData.tag;
                post.day = editedPostData.day;
                post.month = editedPostData.month;
                post.year = editedPostData.year;
                
                await post.save();
                resolve();
            } else {
                resolve();
            }    
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
    getPostByID,
    updatePostData,
    deletePostByID,
}