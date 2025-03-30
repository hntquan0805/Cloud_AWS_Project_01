import express from 'express';
// const { sequelize } = require('./models');
import bodyParser from 'body-parser';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './routes/home';
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
configViewEngine(app);
initWebRoutes(app);

const PORT = process.env.PORT || 10000;

// sequelize.sync().then(() => {
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));