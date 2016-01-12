import { ADD_TILE, ACTIVE_TILE, PLAY_SEQUENCE, START_GAME, CHECK_TILE, DEACTIVATE_TILE } from '../actions';

export default function tiles(state = [], action = {}) {
    switch (action.type) {
    	case DEACTIVATE_TILE:
    		console.log('DEACTIVATE_TILE' +'##'+new Date());
			console.log(state);
			for (let i = 0; i < state.data.length; i++) {
	            state.data[i].active = false;
	            state.data[i].good = false;
	            state.data[i].bad = false;
        	}
        	if(state.sequenceHold || state.playSequence) {
	            return {
	                level: state.level,
	                tilesRemaining: state.tilesRemaining,
	                nbTileFound: state.nbTileFound,
	                gameOn: state.gameOn,
	                data: state.data,
	                sequence: state.sequence,
	                currentSeq: state.currentSeq,
	                nbTilesToFind: state.nbTilesToFind,
	                sequenceInProgress: true,
	                currentTile: state.currentTile
	            }
        	} else {
        		return {
	                level: state.level,
	                tilesRemaining: state.tilesRemaining,
	                nbTileFound: state.nbTileFound,
	                gameOn: state.gameOn,
	                data: state.data,
	                sequence: state.sequence,
	                nbTilesToFind: state.nbTilesToFind,
	                currentTile: state.currentTile
	            }
        	}
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
                    state.nbTilesToFind++;
                    return {
                    	//LEVEL UP
                        level: ++state.level,
                        tilesRemaining: state.nbTilesToFind,
                        nbTileFound: ++state.nbTileFound,
                        nbTilesToFind: state.nbTilesToFind,
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
                        tilesRemaining: --state.tilesRemaining,
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
                    tilesRemaining: state.tilesRemaining,
                    nbTileFound: state.nbTileFound,
                    gameOn: true,
                    gameOver: true
                }
            }

        case PLAY_SEQUENCE:
        	console.log('PLAY_SEQUENCE' + state.currentSeq + '##'+new Date());
        	console.log(state);
            for (let i = 0; i < state.data.length; i++) {
                state.data[i].active = false;
                state.data[i].good = false;
                state.data[i].bad = false;
            }
            
            if (state.currentSeq === state.nbTilesToFind) {
                return {
                    level: state.level,
                    tilesRemaining: state.tilesRemaining,
                    nbTileFound: state.nbTileFound,
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
                    tilesRemaining: state.tilesRemaining,
                    nbTileFound: state.nbTileFound,
                    gameOn: true,
                    data: state.data,
                    sequence: state.sequence,
                    currentSeq: ++state.currentSeq,
                    nbTilesToFind: state.nbTilesToFind,
                    sequenceHold: true
                }
            }
        case START_GAME:
            if(state.sequenceInProgress) {
                return state;
            }

            return {
                level: 1,
                tilesRemaining: action.nbTilesToFind,
                gameOn: true,
                data: action.data,
                sequence: action.sequence,
                currentSeq: 0,
                nbTilesToFind: action.nbTilesToFind,
                sequenceInProgress: true,
                nbTileFound: 0,
                countdown: true
            }

        default:
            return state;
    }
}
