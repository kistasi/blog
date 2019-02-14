const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: String,
    date: Date,
    body: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Post', PostSchema);
