export const ADD_TILE = 'ADD_TILE';
export const ACTIVE_TILE = 'ACTIVE_TILE';

let nextTileId = 0;

function* getColor() {
  yield red;
  yield blue;
  yield green;
  yield black;
  yield lightred;
  yield lightblue;
  yield lightgreen;
};

export function addTile(color) {

  return {
    type: ADD_TILE,
    id: nextTileId++,
    color: getColor().next().value
  };
}

export function activeTile(id) {
  return {
    type: ACTIVE_TILE,
    id: id
  };
}
