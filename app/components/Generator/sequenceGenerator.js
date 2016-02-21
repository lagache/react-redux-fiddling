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
      tiles.push({id: i, imageId : randomNumber, order: i});
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

export function shuffleImages(tiles) {
  var currentIndex = tiles.length, temporaryImageId, randomIndex,
      tile_1, tile_2;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    tile_1 = _.filter(tiles, function(tile) {
      return (tile.order === currentIndex);
    });
    tile_2 = _.filter(tiles, function(tile) {
      return (tile.order === randomIndex);
    });
    
    temporaryImageId = tile_1[0].imageId;
    tile_1[0].imageId = tile_2[0].imageId;
    tile_2[0].imageId = temporaryImageId;
  }

  return tiles;
}

export function shuffleTiles(tiles) {
  var currentOrder = tiles.length, temporaryOrder, randomOrder,
      tile_1, tile_2;

  // While there remain elements to shuffle...
  while (0 !== currentOrder) {

    // Pick a remaining element...
    randomOrder = Math.floor(Math.random() * currentOrder);
    currentOrder -= 1;

    // And swap it with the current element.
    tile_1 = _.filter(tiles, function(tile) {
      return (tile.order === currentOrder);
    });
    tile_2 = _.filter(tiles, function(tile) {
      return (tile.order === randomOrder);
    });
    
    temporaryOrder = tile_1[0].order;
    tile_1[0].order = tile_2[0].order;
    tile_2[0].order = temporaryOrder;
  }

  return tiles;
}

