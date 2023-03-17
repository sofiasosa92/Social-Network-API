const express = require('express');
const db = require('./config/connections');
const routes = require('./routes');

require('dotenv').config();


const cwd = process.cwd();

const port = process.env.PORT || 3001;
const dbConnectionString = process.env.DB_CONNECTION_STRING;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});