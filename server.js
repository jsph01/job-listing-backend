const express = require('express');
const cors = require('cors');
const logger = require('morgan');
//const session = require('express-session');
const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
// app.use(session({
//     secret: 'i like pickles',
//     resave: false,
//     saveUninitialized: true
// }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/replies', require('./routes/replies'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`express listening from port ${PORT}`);
});
