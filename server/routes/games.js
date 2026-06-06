const express = require('express');
const router = express.Router();
const GameScore = require('../models/GameScore');
const User = require('../models/User');

// Save game score
router.post('/save-score', async (req, res) => {
  try {
    const { userId, gameType, score, level, timeSpent } = req.body;

    // Create game score record
    const gameScore = new GameScore({
      userId,
      gameType,
      score,
      level,
      timeSpent,
    });

    await gameScore.save();

    // Update user total score
    const user = await User.findById(userId);
    
    if (gameType === 'word') {
      user.wordGameScore = (user.wordGameScore || 0) + score;
    } else if (gameType === 'excel') {
      user.excelGameScore = (user.excelGameScore || 0) + score;
    } else if (gameType === 'powerpoint') {
      user.powerpointGameScore = (user.powerpointGameScore || 0) + score;
    }

    user.totalScore = user.wordGameScore + user.excelGameScore + user.powerpointGameScore;
    await user.save();

    res.json({
      message: '✅ Ball saqlandi!',
      gameScore,
      totalScore: user.totalScore,
    });
  } catch (err) {
    res.status(500).json({ message: 'Xatolik yuz berdi', error: err.message });
  }
});

// Get game history
router.get('/history/:userId/:gameType', async (req, res) => {
  try {
    const { userId, gameType } = req.params;
    const scores = await GameScore.find({ userId, gameType })
      .sort({ createdAt: -1 })
      .limit(10);
    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: 'Xatolik yuz berdi', error: err.message });
  }
});

module.exports = router;