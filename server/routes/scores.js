const express = require('express');
const router = express.Router();
const GameScore = require('../models/GameScore');

// Get top scores by game type
router.get('/top/:gameType', async (req, res) => {
  try {
    const { gameType } = req.params;
    const topScores = await GameScore.find({ gameType })
      .populate('userId', 'username avatar')
      .sort({ score: -1 })
      .limit(10);
    res.json(topScores);
  } catch (err) {
    res.status(500).json({ message: 'Xatolik yuz berdi', error: err.message });
  }
});

module.exports = router;