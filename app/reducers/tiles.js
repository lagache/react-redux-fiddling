import { ADD_TILE, ACTIVE_TILE, PLAY_SEQUENCE, START_GAME, CHECK_TILE } from '../actions';

export default function tiles(state = [], action = {}) {
    switch (action.type) {
        case CHECK_TILE:
            if(state.sequenceInProgress) {
                return state;
            }

            for (let i = 0; i < state.data.length; i++) {
                state.data[i].good = false;
                state.data[i].bad = false;
            }

            if (state.sequence[state.currentTile++] === parseInt(action.tileId)) {
                state.data[action.tileId].good = true;
                if (state.nbTilesToFind === state.currentTile) {
                    return {
                    	//LEVEL UP
                        level: ++state.level,
                        round: 0,
                        nbTileFound: ++state.nbTileFound,
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
                    	//LEVEL IN PROGRESS
                        level: state.level,
                        round: ++state.round,
                        nbTileFound: ++state.nbTileFound,
                        nbTilesToFind: state.nbTilesToFind,
                        gameOn: true,
                        data: state.data,
                        sequence: state.sequence,
                        currentTile: state.currentTile,
                        gameOn: state.gameOn
                    }
                }
            } else {
            	//GAME OVER
                return {
                    level: state.level,
                    round: state.round,
                    nbTileFound: state.nbTileFound,
                    gameOn: true,
                    gameOver: true
                }
            }

        case PLAY_SEQUENCE:
            for (let i = 0; i < state.data.length; i++) {
                state.data[i].active = false;
                state.data[i].good = false;
                state.data[i].bad = false;
            }
            
            if (state.currentSeq === state.nbTilesToFind) {
                return {
                    level: state.level,
                    round: state.round,
                    nbTileFound: state.nbTileFound,
                    gameOn: true,
                    data: state.data,
                    currentTile: 0,
                    sequence: state.sequence,
                    nbTilesToFind: state.nbTilesToFind
                }
            } else {
                let idTileToActive = state.sequence[state.currentSeq];
                console.log(state.currentSeq);
                state.data[idTileToActive].active = true;

                return {
                    level: state.level,
                    round: state.round,
                    nbTileFound: state.nbTileFound,
                    gameOn: true,
                    data: state.data,
                    sequence: state.sequence,
                    currentSeq: ++state.currentSeq,
                    nbTilesToFind: state.nbTilesToFind,
                    sequenceInProgress: true
                }
            }
        case START_GAME:
            if(state.sequenceInProgress) {
                return state;
            }

            return {
                level: 1,
                round: 0,
                nbTileFound: 0,
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
