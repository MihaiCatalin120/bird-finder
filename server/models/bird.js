const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorType = {
  NOT_KNOWN: 'none',
  BLACK: 'black',
  WHITE: 'white',
  RED: 'red',
  GREEN: 'green',
  BLUE: 'blue',
  BROWN: 'brown',
  BEIGE: 'beige',
  PINK: 'pink',
  ORANGE: 'orange',
  GREY: 'grey'
}

const rarityType = {
  COMMON: 'A',
  UNCOMMON: 'B',
  RARE: 'C',
  VERY_RARE: 'D',
  ONLY_IN_CAPTIVITY: 'E'
}


// Create schema for bird
const BirdSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name is required'],
  },
  rarity: {
    type: rarityType,
    required: [true, 'The rarity is required'],
  },
  head: {
    crownColor: {
      type: colorType,
      required: [true, 'The crown color is required'],
    },
    eyeStripeColor: {
      type: colorType,
      required: [true, 'The eye stripe color is required'],
    },
    beakColor: {
      type: colorType,
      required: [true, 'The beak color is required'],
    },
    beakShape: {
      type: String,
      required: [true, 'The beak shape is required'],
    },
    beakLength: {
      type: String,
      required: [true, 'The beak length is required'],
    },
  },
  body: {
    throatColor: {
      type: colorType,
      required: [true, 'The throat color is required'],
    },
    breastColor: {
      type: colorType,
      required: [true, 'The breast color is required'],
    },
    pattern: {
      type: String,
      required: [true, 'The throat color is required'],
    },
  },
  wing: {
    upperColor: {
      type: colorType,
      required: [true, 'The upperwing color is required'],
    },
    underColor: {
      type: colorType,
      required: [true, 'The underwing color is required'],
    },
    shape: {
      type: String,
      required: [true, 'The wing shape is required'],
    },
  },
  foot: {
    color: {
      type: colorType,
      required: [true, 'The foot color is required'],
    },
    shape: {
      type: String,
      required: [true, 'The foot shape is required'],
    },
  },
  tail: {
    color: {
      type: colorType,
      required: [true, 'The tail color is required'],
    },
    shape: {
      type: String,
      required: [true, 'The tail shape is required'],
    },
  },
});

// Create model for bird
const Bird = mongoose.model('bird', BirdSchema);

module.exports = Bird;