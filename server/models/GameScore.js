const mongoose = require('mongoose');

const GameScoreSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  gameType: {
    type: String,
    enum: ['word', 'excel', 'powerpoint'],
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  level: {
    type: Number,
    default: 1,
  },
  timeSpent: {
    type: Number, // in seconds
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('GameScore', GameScoreSchema);