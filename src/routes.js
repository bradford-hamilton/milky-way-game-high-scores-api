import express from 'express';

import Scores from './lib/scores';

const router = express.Router();

router.get('/high-scores', (req, res, next) => {
  Scores.getHighScores()
    .then((highScores) => {
      res.status(200).json(highScores);
    })
    .catch((err) => console.log(err));
});

router.post('/new-score', (req, res, next) => {
  // need userName and userScore to pass into below function...
  // will it be coming in the body or params?
  Scores.insertNewScore()

});

module.exports = router;
