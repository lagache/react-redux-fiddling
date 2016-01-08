export const PLAY_SEQUENCE = 'PLAY_SEQUENCE';
const NB_TILES_TO_FIND_INIT = 4;

//TODO need to be move in a file managing all sets of data
const INIT_SET_TILES = [{id: '0', color: 'red'}, {id: '1', color: 'blue'}, {id: '2', color: 'green'}, 
{
    id: '3',
    color: 'yellow'
},
{
    id: '4',
    color: 'grey'
},
{
    id: '5',
    color: 'blueviolet'
}];
const SEQUENCE_1 = [1, 0, 3, 2, 4, 5, 1, 2, 0, 3, 5, 2 , 1, 5, 1, 0];

export function playSequence() {
    return {
        type: PLAY_SEQUENCE,
        id: 1,
        next: 2
    };
}

export const START_GAME = 'START_GAME';

export function startGame() {
    let randomSequence = [];
    for(let i = 0; i< 100;i++) {
        // Generate a random number between 0 and nb tiles
        let newRandomNumber = Math.floor(Math.random() * INIT_SET_TILES.length);
        randomSequence.push(newRandomNumber);
    }

    return {
        type: START_GAME,
        data: INIT_SET_TILES,
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