const express = require('express');
const router = express.Router();
const Bird = require('../models/bird');

router.get('/birds', (req, res, next) => {
  Bird.find({}, {name: 1, scientificName: 1, wikiLink: 1, rarity: 1})
    .then((data) => {
      res.send(data);
    })
    .catch(next);
});

router.get('/birds/filter', (req, res, next) => {
  Bird.find({}, {name: 1, scientificName: 1, wikiLink: 1, rarity: 1})
    .then((data) => {
      res.send(data);
    })
    .catch(next);
});

module.exports = router;