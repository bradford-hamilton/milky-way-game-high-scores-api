import express from 'express';

import Scores from './lib/scores';

const router = express.Router();

router.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

router.get('/api/v1/high-scores', (req, res, next) => {
  Scores.getHighScores()
    .then(highScores => res.status(200).json(highScores))
    .catch(err => console.log(err));
});

router.post('/api/v1/new-score', (req, res, next) => {
  Scores.insertNewScore(req.body.userName, req.body.userScore)
    .then((results) => {
      results = results[0];

      res.status(200).json({
        message: `${results.name} with score of ${results.score} was successfully added!`
      });
    })
    .catch(err => console.log(err));
});

export default router;
