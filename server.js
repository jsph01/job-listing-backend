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

if(process.env.NODE_ENV === 'production' ) {
    app.use(express.static('front-end/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`express listening from port ${PORT}`);
});
