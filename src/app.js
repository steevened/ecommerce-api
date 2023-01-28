const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const authRouter = require('./routes/auth.routes');
const routerApi = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

initModels(app);

// db.sync({ force: false })
//   .then(() => console.log('db synched'))
//   .catch((error) => console.log(error));

routerApi(app);

module.exports = app;
