
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













