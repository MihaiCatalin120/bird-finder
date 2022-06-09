const express = require('express');
const helperFunctions = require('../helper/functions');
const router = express.Router();
const Bird = require('../models/bird');

router.get('/birds', (req, res, next) => {
  Bird.find({}, { name: 1, scientificName: 1, wikiLink: 1, rarity: 1 })
    .then((data) => {
      res.send(data);
    })
    .catch(next);
});

router.get('/birds/filter', (req, res, next) => {
  var progress = {
    noBirdsFound: 0,
    birdsFound: [],
    initialCheckedElements: 0
  }
  var checkedElements = 0;
  const totalElements = 18;

  var birdQuery = {};

  (req.query.headcrownColor) ? (birdQuery['head.crownColor'] = req.query.headcrownColor) && checkedElements++ : "";
  (req.query.headeyeStripeColor) ? (birdQuery['head.eyeStripeColor'] = req.query.headeyeStripeColor) && checkedElements++ : "";
  (req.query.headbeakColor) ? (birdQuery['head.beakColor'] = req.query.headbeakColor) && checkedElements++ : "";
  (req.query.headbeakShape) ? (birdQuery['head.beakShape'] = req.query.headbeakShape) && checkedElements++ : "";
  (req.query.headbeakLength) ? (birdQuery['head.beakLength '] = req.query.headbeakLength) && checkedElements++ : "";

  (req.query.bodythroatColor) ? (birdQuery['body.throatColor'] = req.query.bodythroatColor) && checkedElements++ : "";
  (req.query.bodybreastColor) ? (birdQuery['body.breastColor'] = req.query.bodybreastColor) && checkedElements++ : "";
  (req.query.bodypattern) ? (birdQuery['body.pattern'] = req.query.bodypattern) && checkedElements++ : "";
  (req.query.bodysize) ? (birdQuery['body.size'] = req.query.bodysize) && checkedElements++ : "";

  (req.query.wingupperColor) ? (birdQuery['wing.upperColor'] = req.query.wingupperColor) && checkedElements++ : "";
  (req.query.wingunderColor) ? (birdQuery['wing.underColor'] = req.query.wingunderColor) && checkedElements++ : "";
  (req.query.wingshape) ? (birdQuery['wing.shape'] = req.query.wingshape) && checkedElements++ : "";

  (req.query.legcolor) ? (birdQuery['leg.color'] = req.query.legcolor) && checkedElements++ : "";
  (req.query.leglength) ? (birdQuery['leg.length'] = req.query.leglength) && checkedElements++ : "";
  (req.query.legshape) ? (birdQuery['leg.shape'] = req.query.legshape) && checkedElements++ : "";

  (req.query.tailcolor) ? (birdQuery['tail.color'] = req.query.tailcolor) && checkedElements++ : "";
  (req.query.taillength) ? (birdQuery['tail.length'] = req.query.taillength) && checkedElements++ : "";
  (req.query.tailshape) ? (birdQuery['tail.shape'] = req.query.tailshape) && checkedElements++ : "";

  progress.initialCheckedElements = checkedElements;

  if (progress.initialCheckedElements == 0) { res.send({}); return; }

  helperFunctions.findThreeBirds(progress, checkedElements, progress.initialCheckedElements, birdQuery, 0, next);

  setTimeout(() => {  res.send(progress.birdsFound); }, 7000);
});

module.exports = router;