
import { START_GAME, PAUSE_GAME, RESUME_GAME, STOP_GAME,
         ADD_TILE, ACTIVE_TILE, PLAY_SEQUENCE, CHECK_TILE, DEACTIVATE_TILE, 
         SET_NUM_TILES, SET_SPEED, SET_NEW_SEQUENCE_BETWEEN_LEVELS, SET_SETTINGS_POSITION_OR_COLOR, SET_SETTINGS_SHUFFLE_TILES_AFTER_SEQUENCE,
         STORE_SCORE } from '../actions';

import {generateTiles, generateSequence, shuffleImages, shuffleTiles} from '../Helper/Generator/sequenceGenerator.js';
import {storeScore, retrieveScores} from '../Helper/storage/localStorage.js';
import * as _ from 'underscore';


export default function tiles(state = [], action = {}) {
    switch (action.type) {
    	case DEACTIVATE_TILE:
            let tiles = [], newState = Object.assign({}, state, {});

			_.each(state.data, function(tile) {
                tile.active = false;
                tile.good = false;
                tile.bad = false;

                tiles.push(tile);
            });
        	newState.data = tiles;
        	
            if(state.sequenceHold || state.playSequence) {
	            newState.sequenceInProgress = true;
            }
            
            if(state.showBadTile) {             
                //GAME OVER

                // Store new score in the local storage
                storeScore(state.score);
            
                // return new state
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
                    settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption,
                    settingColorOrPositionOption: state.settingColorOrPositionOption,
                    settingShuffleTilesAfterSequenceOption: state.settingShuffleTilesAfterSequenceOption,
                    score: state.score,
                    scores: retrieveScores(),
                    goal: ''
                }
            }

            return newState;

        case CHECK_TILE:
            if(state.sequenceInProgress || state.playSequence || state.countdown) {
                return state;
            }

            for (let i = 0; i < state.data.length; i++) {
                state.data[i].good = false;
                state.data[i].bad = false;
            }

            if (state.sequence[state.currentTile++] === parseInt(action.tileId)) {
                let tileGood = _.find(state.data, function(tile) {
                    return (tile.id === action.tileId);
                });
                tileGood.good = true;
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
                        settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption,
                        settingColorOrPositionOption: state.settingColorOrPositionOption,
                        settingShuffleTilesAfterSequenceOption: state.settingShuffleTilesAfterSequenceOption,
                        score: (state.score + state.level * 100),
                        scores: state.scores,
                        goal: 'wait'
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
                        settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption,
                        settingColorOrPositionOption: state.settingColorOrPositionOption,
                        settingShuffleTilesAfterSequenceOption: state.settingShuffleTilesAfterSequenceOption,
                        score: (state.score + state.level* 10),
                        scores: state.scores,
                        goal: 'find ' + state.currentTile + '/' + state.nbTilesToFind 
                    }
                }
            } else {
                let tileBad = _.find(state.data, function(tile) {
                    return (tile.id === action.tileId);
                });
                tileBad.bad = true;
                
                if (!state.showBadTile) {
                    state.showBadTile = 4;
                }

                return {
                    //SHOW BAD TILES
                    level: state.level,
                    tilesRemaining: state.tilesRemaining,
                    nbTileFound: state.nbTileFound,
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
                    settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption,
                    settingColorOrPositionOption: state.settingColorOrPositionOption,
                    settingShuffleTilesAfterSequenceOption: state.settingShuffleTilesAfterSequenceOption,
                    score: state.score,
                    scores: state.scores,
                    goal: 'wrong tile',
                    showBadTile: --state.showBadTile
                }
            }

        case PLAY_SEQUENCE:
            let newTiles = [];

            _.each(state.data, function(tile) {
                tile.active = false;
                tile.good = false;
                tile.bad = false;

                newTiles.push(tile);
            });
            
            if (state.currentSeq === state.nbTilesToFind) {
                if(state.settingShuffleTilesAfterSequenceOption[1].active) { // shuffle after playing sequence at true
                    newTiles = shuffleTiles(newTiles);
                }

                if(state.settingColorOrPositionOption[1].active) { // position matters (shuffle color)
                    newTiles = shuffleImages(newTiles);
                }

                return {
                    level: state.level,
                    tilesRemaining: state.tilesRemaining,
                    nbTileFound: state.nbTileFound,
                    gameOn: true,
                    data: newTiles,
                    currentTile: 0,
                    sequence: state.sequence,
                    nbTilesToFind: state.nbTilesToFind,
                    nbTiles: state.nbTiles,
                    speedms: state.speedms,
                    settingTileOption: state.settingTileOption,
                    settingSpeedOption: state.settingSpeedOption,
                    settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption,
                    settingColorOrPositionOption: state.settingColorOrPositionOption,
                    settingShuffleTilesAfterSequenceOption: state.settingShuffleTilesAfterSequenceOption,
                    score: state.score,
                    scores: state.scores,
                    goal: 'find '  + '0/' + state.nbTilesToFind
                }
            } else {
                let idTileToActive = state.sequence[state.currentSeq];
                state.data[idTileToActive].active = true;

                return {
                    level: state.level,
                    tilesRemaining: state.tilesRemaining,
                    nbTileFound: state.nbTileFound,
                    gameOn: true,
                    data: newTiles,
                    sequence: state.sequence,
                    currentSeq: ++state.currentSeq,
                    nbTilesToFind: state.nbTilesToFind,
                    sequenceHold: true,
                    nbTiles: state.nbTiles,
                    speedms: state.speedms,
                    settingTileOption: state.settingTileOption,
                    settingSpeedOption: state.settingSpeedOption,
                    settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption,
                    settingColorOrPositionOption: state.settingColorOrPositionOption,
                    settingShuffleTilesAfterSequenceOption: state.settingShuffleTilesAfterSequenceOption,
                    score: state.score,
                    scores: state.scores,
                    goal: 'wait ' + state.currentSeq + '/' + state.nbTilesToFind 
                }
            }
        case START_GAME:
            let data =  generateTiles(action.numberOfTiles);

            return {
                level: 1,
                tilesRemaining: action.nbTilesToFind,
                gameOn: true,
                data: data,
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
                settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption,
                settingColorOrPositionOption: state.settingColorOrPositionOption,
                settingShuffleTilesAfterSequenceOption: state.settingShuffleTilesAfterSequenceOption,
                score: 0,
                scores: retrieveScores(),
                goal: 'wait'
            }

        case SET_NUM_TILES:

            let newSetNumTilesState = Object.assign({}, state, 
                {nbTiles: action.numberOfTiles});

            _.each(newSetNumTilesState.settingTileOption, function(tileOption) {
                tileOption.active = (tileOption.value === action.numberOfTiles);
            });

            return newSetNumTilesState;

        case SET_SPEED:
            let newSetSpeedState = Object.assign({}, state, 
                {speedms: action.speedms});

            _.each(newSetSpeedState.settingSpeedOption, function(speedOption) {
                speedOption.active = (speedOption.value === action.speedms);
            });

            return newSetSpeedState;

        case SET_NEW_SEQUENCE_BETWEEN_LEVELS:
            let newSetNewSequenceBetweenLevelsState = Object.assign({}, state, {});

            _.each(newSetNewSequenceBetweenLevelsState.settingNewSequenceBetweenLevelsOption, function(newSequenceOption) {
                newSequenceOption.active = (newSequenceOption.value === action.newSequenceBetweenLevels);
            });

            return newSetNewSequenceBetweenLevelsState;

        case SET_SETTINGS_POSITION_OR_COLOR:
            let newSettingsPositionOrColorState = Object.assign({}, state, {});

            if(action.positionOrColorOption === 'position') {
                _.each(newSettingsPositionOrColorState.settingShuffleTilesAfterSequenceOption, function (option) {
                    option.active = (option.value === false);
                });
            }

            _.each(newSettingsPositionOrColorState.settingColorOrPositionOption, function (option) {
                option.active = (option.value === action.positionOrColorOption);
            });

            return newSettingsPositionOrColorState;

        case SET_SETTINGS_SHUFFLE_TILES_AFTER_SEQUENCE:
            let newSettingsShuffleTilesAfterSequenceState = Object.assign({}, state, {});

            if(action.shuffleTilesAfterSequenceOption) {
                _.each(newSettingsShuffleTilesAfterSequenceState.settingColorOrPositionOption, function (option) {
                    option.active = (option.value === 'color');
                });
            }

            _.each(newSettingsShuffleTilesAfterSequenceState.settingShuffleTilesAfterSequenceOption, function (option) {
                option.active = (option.value === action.shuffleTilesAfterSequenceOption);
            });

            return newSettingsShuffleTilesAfterSequenceState;

        case PAUSE_GAME:
            let pauseGameState = Object.assign({}, state, {});

            pauseGameState.pauseOn = true;

            return pauseGameState;    

        case RESUME_GAME:
            let resumeGameState = Object.assign({}, state, {});

            resumeGameState.pauseOn = false;

            return resumeGameState;    

        case STOP_GAME:
            //GAME OVER

            // Store new score in the local storage
            storeScore(state.score);
        
            // return new state
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
                settingNewSequenceBetweenLevelsOption: state.settingNewSequenceBetweenLevelsOption,
                settingColorOrPositionOption: state.settingColorOrPositionOption,
                settingShuffleTilesAfterSequenceOption: state.settingShuffleTilesAfterSequenceOption,
                score: state.score,
                scores: retrieveScores(),
                goal: ''
            }    
 
        default:
            return state;
    }
}

