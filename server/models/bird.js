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
  scientificName: {
    type: String,
    required: [true, 'The scientific name is required'],
  },
  wikiLink: {type: String},
  rarity: {
    type: String,
    required: [true, 'The rarity is required'],
  },
  head: {
    crownColor: {
      type: String,
      required: [true, 'The crown color is required'],
    },
    eyeStripeColor: {
      type: String,
      required: [true, 'The eye stripe color is required'],
    },
    beakColor: {
      type: String,
      required: [true, 'The beak color is required'],
    },
    beakShape: {
      type: String,
      required: [true, 'The beak shape is required'],
    },
    beakLength: {
      type: String,
      required: [true, 'The beak length is required'],
    }
  },
  body: {
    size : {
      type: String,
      required: [true, "The body size is required"],
    },
    throatColor: {
      type: String,
      required: [true, 'The throat color is required'],
    },
    breastColor: {
      type: String,
      required: [true, 'The breast color is required'],
    },
    pattern: {
      type: String,
      required: [true, 'The throat color is required'],
    }
  },
  wing: {
    upperColor: {
      type: String,
      required: [true, 'The upperwing color is required'],
    },
    underColor: {
      type: String,
      required: [true, 'The underwing color is required'],
    },
    shape: {
      type: String,
      required: [true, 'The wing shape is required'],
    }
  },
  leg: {
    color: {
      type: String,
      required: [true, 'The leg color is required'],
    },
    length: {
      type: String,
      required: [true, 'The leg length is required'],
    },
    shape: {
      type: String,
      required: [true, 'The leg shape is required'],
    }
  },
  tail: {
    color: {
      type: String,
      required: [true, 'The tail color is required'],
    },
    length: {
      type: String,
      required: [true, 'The tail length is required'],
    },
    shape: {
      type: String,
      required: [true, 'The tail shape is required'],
    }
  }
});

// Create model for bird
const Bird = mongoose.model('Birds', BirdSchema);

module.exports = Bird;