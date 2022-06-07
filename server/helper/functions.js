const Bird = require('../models/bird');

function findThreeBirds(progress, checkedElements, totalElements, birdDetails, depth, next) {
    if(progress.noBirdsFound == 3 || depth > 3 || depth >= totalElements) return;
    const accuracy = checkedElements * 100 / totalElements;

    console.log(birdDetails);

    Bird.find(birdDetails, { name: 1, scientificName: 1, wikiLink: 1, rarity: 1 })
      .then((data) => {
        var birds = [];
        data.forEach(element => {
            birds.push(element.toObject());
        });
        if(birds.length !== 0) {
            birds.forEach(bird => {
                const found = progress.birdsFound.some(el => el.name === bird.name);
                if (!found) {
                    bird.accuracy = accuracy;
                    progress.birdsFound.push(bird);
                    progress.noBirdsFound++;
                    if(progress.noBirdsFound == 3) return;
                }
            })
            
        }

        Object.keys(birdDetails).forEach((key) => {
            var copyDetails = Object.assign({}, birdDetails);
            delete copyDetails[key];
            findThreeBirds(progress, checkedElements - 1, totalElements, copyDetails, depth + 1);
        });
      })
      .catch(next);
}

exports.findThreeBirds = findThreeBirds;