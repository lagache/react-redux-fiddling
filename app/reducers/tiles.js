import { ADD_TILE, ACTIVE_TILE, PLAY_SEQUENCE, START_GAME } from '../actions';

export default function tiles(state = [], action = {}) {
    switch (action.type) {
        case ADD_TILE:
            return {
                id: action.id,
                color: action.color,
                isOn: false
            }
        case ACTIVE_TILE:
            return {
                id: action.id,
                isOn: true
            }
        case PLAY_SEQUENCE:

            return {
                id: action.id,
                isOn: true
            }
        case START_GAME:
            return {
                level: 1,
                round: 0,
                gameOn: true,
                data: [{id: '1', color : 'red'}, {id: '2', color : 'blue'}, {id: '3', color: 'green'}, {id: '4', color : 'yellow'}]
            }

        default:
            return state;
    }
}
