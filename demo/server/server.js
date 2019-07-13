const express = require('express');
const Path = require('path');

const app = express();
const port = process.env.PORT || 8000;


/**
 * Middleware
 */
app.use(require('cors')());
app.use(require('body-parser').json());


/**
 * Routes
 */
app.use('/', express.static(Path.join(__dirname, '../client/dist')));

app.get('/data', require('./signing.handler'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
