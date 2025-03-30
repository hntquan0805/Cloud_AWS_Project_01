import express from 'express'; 

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.render('index');
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;