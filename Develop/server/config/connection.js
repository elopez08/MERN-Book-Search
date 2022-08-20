const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/just_tech_news_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

module.exports = mongoose.connection;
