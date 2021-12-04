const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.use('/assets', express.static(path.join(__dirname, '../frontend/assets')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const tarotApiUrl = 'https://rws-cards-api.herokuapp.com/api/v1/cards';

app.get('/cards/random', (req, res) => {
  const { n } = req.query;
  axios({
    method: 'get',
    url: `${tarotApiUrl}/random?n=${n}`,
    responseType: 'application/json',
  }).then((result) => res.send(result.data))
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  console.log(`Tarot Tool App listening at http://localhost:${port}`);
});
