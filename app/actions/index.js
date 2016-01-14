export const PLAY_SEQUENCE = 'PLAY_SEQUENCE';
const NB_TILES_TO_FIND_INIT = 2;

//TODO need to be move in a file managing all sets of data
const INIT_SET_TILES = [
{id: '0', color: 'red'}, 
{id: '1', color: 'blue'}, 
{id: '2', color: 'grey'},
{id: '3', color: 'green'}, 
{id: '4', color: 'yellow'},
{id: '5', color: 'blueviolet'}
];

export function playSequence() {
    return {
        type: PLAY_SEQUENCE,
        id: 1,
        next: 2
    };
}

export const START_GAME = 'START_GAME';

export function startGame(numberOfTiles) {
    let randomSequence = [];
    for(let i = 0; i< 100;i++) {
        // Generate a random number between 0 and nb tiles
        let newRandomNumber = Math.floor(Math.random() * numberOfTiles);
        randomSequence.push(newRandomNumber);
    }

    return {
        type: START_GAME,
        data: INIT_SET_TILES.slice(0, numberOfTiles),
        sequence: randomSequence,
        nbTilesToFind: NB_TILES_TO_FIND_INIT
    };
}

export const CHECK_TILE = 'CHECK_TILE';

export function checkTile(id) {
    return {
        type: CHECK_TILE,
        tileId: id
    }
}

export const DEACTIVATE_TILE = 'DEACTIVATE_TILE';

export function deactivateTile(id) {
    return {
        type: DEACTIVATE_TILE,
        tileId: id
    }
}

export const SET_NUM_TILES = 'SET_NUM_TILES';

export function setNumberOfTiles(numberOfTiles) {
    return {
        type: SET_NUM_TILES,
        numberOfTiles: numberOfTiles
    }
}