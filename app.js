const express = require('express');
const cors = require('cors');
const app = express();

const empresasRoute = require('./src/routes/empresa.routes')
const adminRoute = require('./src/routes/admin.routes')


app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use(cors());

app.use('/api', empresasRoute, adminRoute) 

module.exports = app;
