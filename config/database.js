const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;
db.on('connected', () => {
    console.log(`mongoose connected to database at ${db.host}:${db.port}`);
});
