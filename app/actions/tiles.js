export const ADD_TILE = 'ADD_TILE';
export const ACTIVE_TILE = 'ACTIVE_TILE';

let nextTileId = 0;

export function addTile(color) {
  return {
    type: ADD_TILE,
    id: nextTileId++,
    color: color
  };
}

export function activeTile(id) {
  return {
    type: ACTIVE_TILE,
    id: id
  };
}
