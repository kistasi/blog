const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
  {
    title: String,
    description: Date,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Category', CategorySchema);
