const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const adminRouting = require('./routes/admin/AdminRouter');
const frontRouting = require('./routes/FrontRouter');

/* Config */
const port = process.env.PORT || 3000;

/* Initialize express.js */
const app = express();

/* Body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Template engine */
app.set('view engine', 'pug');
app.set('views', [__dirname, '/views'].join(''));

/* Resources */
app.use('/admin', adminRouting);
app.use(frontRouting);

/* Handle 404 */
app.use((request, response) => {
  response.render('errors/404');
});

app.listen(port, () => console.log(`Application is listening on port ${port}...`));

// Set up default mongoose connection
mongoose.connect('mongodb://127.0.0.1/my_database', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
