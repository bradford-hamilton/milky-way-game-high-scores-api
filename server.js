import express from 'express';

const app = express();

app.get('/high-scores', (req, res) => {
  
  res.send('hello world');
});

app.listen(3000);
