import * as _ from 'underscore';

const NUMBER_OF_IMAGES_AVAILABLE = 40;

export function generateTiles(numberOfTiles) {
  let tiles = [];
  let numbers = [];
  let i = 0
  while(tiles.length < numberOfTiles) {
    let randomNumber = generateNumber(0, NUMBER_OF_IMAGES_AVAILABLE);
    if(!_.contains(numbers, randomNumber)) {
      numbers.push(randomNumber);
      tiles.push({id: i, imageId : randomNumber});
      i++;
    }
  }

  return tiles;
}

export function generateNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

export function	generateSequence(numberOfTiles) {
    let randomSequence = [];
    for(let i = 0; i< 300; i++) {
        // Generate a random number between 0 and nb tiles
        let newRandomNumber = Math.floor(Math.random() * numberOfTiles);
        randomSequence.push(newRandomNumber);
    }

    return randomSequence;
}

export function shuffleColor(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex].color;
    array[currentIndex].color = array[randomIndex].color;
    array[randomIndex].color = temporaryValue;
  }

  return array;
}

export function shuffleTiles(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

