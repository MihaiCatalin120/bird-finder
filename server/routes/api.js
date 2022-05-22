const express = require('express');
const router = express.Router();
const Bird = require('../models/bird');

router.get('/birds', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Bird.find()
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch(next);
});

module.exports = router;