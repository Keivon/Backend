const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    min: 1
  },
  reviewValue: {
    type: String,
    required: true,
    min: 1
  },
  comment: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('review', reviewSchema);