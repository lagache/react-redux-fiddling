
export function	generateSequence(numberOfTiles) {
    let randomSequence = [];
    for(let i = 0; i< 300; i++) {
        // Generate a random number between 0 and nb tiles
        let newRandomNumber = Math.floor(Math.random() * numberOfTiles);
        randomSequence.push(newRandomNumber);
    }

    return randomSequence;
}

