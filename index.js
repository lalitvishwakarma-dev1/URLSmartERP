const express = require('express');
const connectDB = require('./config/db');
const { connect } = require('mongoose');

const app = express();
connectDB();
app.use(express.json({extended : false}));

app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));

const PORT = 3000;

app.listen(PORT,() => console.log(`Server running on port ${PORT}`));

