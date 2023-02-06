const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const initModels = require('./models/initModels');
const routerApi = require('./routes');
const errorHandler = require('./middlewares/error.middleware');
const tokenExtractor = require('./middlewares/tokenExtractor.middleware');
const db = require('./utils/database');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

initModels(app);

app.use(tokenExtractor);
routerApi(app);
app.use(errorHandler);

db.sync({ force: false })
  .then(() => console.log('db synched'))
  .catch((error) => console.log(error));

module.exports = app;
