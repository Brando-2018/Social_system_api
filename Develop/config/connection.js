// connect to mongoose server
const { connect, connection } = require('mongoose');
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social_system_api';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;