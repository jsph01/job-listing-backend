const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/replies', require('./routes/replies'));


app.use(express.static(path(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile('index.html');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`express listening from port ${PORT}`);
});
