const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const adminRouting = require('./app/routes/admin/admin-router');
const frontRouting = require('./app/routes/front-router');

/* Config */
const port = process.env.PORT || 3000;

/* Initialize express.js */
const app = express();

/* Body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Resources */
app.use('/admin', adminRouting);
app.use(frontRouting);

/* Handle 404 */
app.use((req, res) => {
  res.status(404).json({ message: 'Page not found!' });
});

app.listen(port, () => console.log(`Application is listening on port ${port}...`));

// Set up default mongoose connection
mongoose.connect('mongodb://127.0.0.1/blog', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
