import { ADD_TILE, ACTIVE_TILE, PLAY_SEQUENCE, START_GAME, CHECK_TILE, DEACTIVATE_TILE, 
         SET_NUM_TILES, SET_SPEED, SET_NEW_SEQUENCE_BETWEEN_LEVELS } from '../actions';
import {generateSequence} from '../components/Generator/sequenceGenerator.js';


export default function tiles(state = [], action = {}) {
    switch (action.type) {
    	case DEACTIVATE_TILE:
    		if(!state.data) {
    			return state;
    		}
			for (let i = 0; i < state.data.length; i++) {
	            state.data[i].active = false;
	            state.data[i].good = false;
	            state.data[i].bad = false;
        	}
        	if(state.countdown) {
        		return {
	                level: state.level,
	                tilesRemaining: state.tilesRemaining,
	                nbTileFound: state.nbTileFound,
	                gameOn: state.gameOn,
	                data: state.data,
	                sequence: state.sequence,
	                nbTilesToFind: state.nbTilesToFind,
	                currentTile: state.currentTile,
	                countdown: state.countdown,
	                currentSeq: state.currentSeq,
                    nbTiles: state.nbTiles,
                    speedms: state.speedms,
                    settingTileOption: state.settingTileOption,
                    settingSpeedOption: state.settingSpeedOption,
                    settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption
	            }
        	} else if(state.sequenceHold || state.playSequence) {
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
	                currentTile: state.currentTile,
	                countdown: state.countdown,
                    nbTiles: state.nbTiles,
                    speedms: state.speedms,
                    settingTileOption: state.settingTileOption,
                    settingSpeedOption: state.settingSpeedOption,
                    settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption
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
	                currentTile: state.currentTile,
	                countdown: state.countdown,
                    nbTiles: state.nbTiles,
                    speedms: state.speedms,
                    settingTileOption: state.settingTileOption,
                    settingSpeedOption: state.settingSpeedOption,
                    settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption
	            }
        	}
        case CHECK_TILE:
            if(state.sequenceInProgress || state.playSequence || state.countdown) {
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
                    var newSequence = state.sequence;
                    if(state.settingNewSequenceBetweenLevelsOption[1].active) { //option 'yes' active
                        newSequence = generateSequence(state.nbTiles);
                    }

                    return {
                    	//LEVEL UP
                        level: ++state.level,
                        tilesRemaining: state.nbTilesToFind,
                        nbTileFound: ++state.nbTileFound,
                        nbTilesToFind: state.nbTilesToFind,
                        data: state.data,
                        sequence: newSequence,
                        currentSeq: 0,
                        currentTile: 0,
                        gameOn: state.gameOn,
                        countdown: true,
                        nbTiles: state.nbTiles,
                        speedms: state.speedms,
                        settingTileOption: state.settingTileOption,
                        settingSpeedOption: state.settingSpeedOption,
                        settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption
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
                        gameOn: state.gameOn,
                        nbTiles: state.nbTiles,
                        speedms: state.speedms,
                        settingTileOption: state.settingTileOption,
                        settingSpeedOption: state.settingSpeedOption,
                        settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption
                    }
                }
            } else {
            	//GAME OVER
                return {
                    level: state.level,
                    tilesRemaining: state.tilesRemaining,
                    nbTileFound: state.nbTileFound,
                    gameOn: true,
                    gameOver: true,
                    nbTiles: state.nbTiles,
                    speedms: state.speedms,
                    settingTileOption: state.settingTileOption,
                    settingSpeedOption: state.settingSpeedOption,
                    settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption
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
                    tilesRemaining: state.tilesRemaining,
                    nbTileFound: state.nbTileFound,
                    gameOn: true,
                    data: state.data,
                    currentTile: 0,
                    sequence: state.sequence,
                    nbTilesToFind: state.nbTilesToFind,
                    nbTiles: state.nbTiles,
                    speedms: state.speedms,
                    settingTileOption: state.settingTileOption,
                    settingSpeedOption: state.settingSpeedOption,
                    settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption
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
                    sequenceHold: true,
                    nbTiles: state.nbTiles,
                    speedms: state.speedms,
                    settingTileOption: state.settingTileOption,
                    settingSpeedOption: state.settingSpeedOption,
                    settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption
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
                sequence: generateSequence(state.nbTiles),
                currentSeq: 0,
                nbTilesToFind: action.nbTilesToFind,
                sequenceInProgress: true,
                nbTileFound: 0,
                countdown: true,
                nbTiles: state.nbTiles,
                speedms: state.speedms,
                settingTileOption: state.settingTileOption,
                settingSpeedOption: state.settingSpeedOption,
                settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption
            }

        case SET_NUM_TILES:

            let newSetNumTilesState = Object.assign({}, state, 
                {nbTiles: action.numberOfTiles});

            for (let i=0; i < newSetNumTilesState.settingTileOption.length; i++) {
                let tileOption = newSetNumTilesState.settingTileOption[i];
                tileOption.active = (tileOption.value === action.numberOfTiles);
            }
            return newSetNumTilesState;

        case SET_SPEED:
            let newSetSpeedState = Object.assign({}, state, 
                {speedms: action.speedms});

            for (let i=0; i < newSetSpeedState.settingSpeedOption.length; i++) {
                let speedOption = newSetSpeedState.settingSpeedOption[i];
                speedOption.active = (speedOption.value === action.speedms);
            }
            return newSetSpeedState;

        case SET_NEW_SEQUENCE_BETWEEN_LEVELS:
            let newSetNewSequenceBetweenLevelsState = Object.assign({}, state, {});

            for (let i=0; i < newSetNewSequenceBetweenLevelsState.settingNewSequenceBetweenLevelsOption.length; i++) {
                let newSequenceOption = newSetNewSequenceBetweenLevelsState.settingNewSequenceBetweenLevelsOption[i];
                newSequenceOption.active = (newSequenceOption.value === action.newSequenceBetweenLevels);
            }
            return newSetNewSequenceBetweenLevelsState;


        default:
            return state;
    }
}

