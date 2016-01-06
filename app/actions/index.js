export const PLAY_SEQUENCE = 'PLAY_SEQUENCE';

export function playSequence() {
    console.log('in the play sequence action');
    return {
        type: PLAY_SEQUENCE,
        id: 1,
        next: 2
    };
}

export const START_GAME = 'START_GAME';

export function startGame() {
    return {
        type: START_GAME
    };
}


export const ADD_TILE = 'ADD_TILE';
export const ACTIVE_TILE = 'ACTIVE_TILE';

let nextTileId = 0;

//function* getColor() {
//    yield red;
//    yield blue;
//    yield green;
//    yield black;
//    yield lightred;
//    yield lightblue;
//    yield lightgreen;
//};
//
//export function addTile(color) {
//
//    return {
//        type: ADD_TILE,
//        id: nextTileId++,
//        color: getColor().next().value
//    };
//}

export function activeTile(id) {
    return {
        type: ACTIVE_TILE,
        id: id
    };
}