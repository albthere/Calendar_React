const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/calendar', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log("STATUS: Mongoose DB Connected to Server"));

module.exports = { db };
