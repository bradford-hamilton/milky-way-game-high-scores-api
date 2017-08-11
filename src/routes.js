import express from 'express';

import Scores from './lib/scores';

const router = express.Router();

router.get('/high-scores', (req, res, next) => {
  Scores.getHighScores()
    .then((highScores) => {
      res.status(200).json(highScores);
    })
});

module.exports = router;
