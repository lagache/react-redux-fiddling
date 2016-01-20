import { ADD_TILE, ACTIVE_TILE, PLAY_SEQUENCE, START_GAME, CHECK_TILE } from '../actions';

export default function tiles(state = [], action = {}) {
    switch (action.type) {
        case ADD_TILE:
            return {
                id: action.id,
                color: action.color,
                isOn: false
            }
        case CHECK_TILE:
            for (let i = 0; i < state.data.length; i++) {
                state.data[i].good = false;
                state.data[i].bad = false;
            }

            if (state.sequence[state.currentTile++] === parseInt(action.tileId)) {
                state.data[action.tileId].good = true;
                if (state.nbTilesToFind === state.currentTile) {
                    return {
                        level: ++state.level,
                        round: 0,
                        nbTilesToFind: ++state.nbTilesToFind,
                        data: state.data,
                        sequence: state.sequence,
                        currentSeq: 0,
                        currentTile: 0,
                        gameOn: state.gameOn,
                        playSequence: true
                    }
                } else {
                    return {
                        level: state.level,
                        round: ++state.round,
                        nbTilesToFind: state.nbTilesToFind,
                        gameOn: true,
                        data: state.data,
                        sequence: state.sequence,
                        currentTile: state.currentTile,
                        gameOn: state.gameOn
                    }
                }
            } else {
                state.data[action.tileId].good = false;
                return {
                    level: state.level,
                    round: state.round,
                    gameOn: true,
                    gameOver: true
                }
            }

        case PLAY_SEQUENCE:

            for (let i = 0; i < state.data.length; i++) {
                state.data[i].active = false;
            }
            state.currentSeq++;

            if (state.currentSeq === state.nbTilesToFind) {
                return {
                    level: state.level,
                    round: state.round,
                    gameOn: true,
                    data: state.data,
                    currentTile: 0,
                    sequence: state.sequence,
                    nbTilesToFind: state.nbTilesToFind
                }
            } else {
                let idTileToActive = state.sequence[state.currentSeq];

                state.data[idTileToActive].active = true;

                return {
                    level: state.level,
                    round: state.round,
                    gameOn: true,
                    data: state.data,
                    sequence: state.sequence,
                    currentSeq: state.currentSeq,
                    nbTilesToFind: state.nbTilesToFind
                }
            }
        case START_GAME:
            for (let i = 0; i < action.data.length; i++) {
                action.data[i].active = false;
            }
            let idTileToActive = action.sequence[0];

            action.data[idTileToActive].active = true;

            return {
                level: 1,
                round: 0,
                gameOn: true,
                data: action.data,
                sequence: action.sequence,
                currentSeq: 0,
                nbTilesToFind: action.nbTilesToFind,
                playSequence: true
            }

        default:
            return state;
    }
}
