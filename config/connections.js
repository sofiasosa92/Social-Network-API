require('dotenv').config();

const { connect } = require('mongoose');

connect (
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nosql-social-network',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = connect;
