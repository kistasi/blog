const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema(
  {
    title: String,
    description: Date,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Tag', TagSchema);
