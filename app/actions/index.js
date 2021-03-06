export const PLAY_SEQUENCE = 'PLAY_SEQUENCE';
const NB_TILES_TO_FIND_INIT = 2;

export function playSequence() {
    return {
        type: PLAY_SEQUENCE,
        id: 1,
        next: 2
    };
}

export const START_GAME = 'START_GAME';

export function startGame(numberOfTiles) {
    return {
        type: START_GAME,
        numberOfTiles: numberOfTiles,
        nbTilesToFind: NB_TILES_TO_FIND_INIT
    };
}

export const PAUSE_GAME = 'PAUSE_GAME';

export function pauseGame() {
    return {
        type: PAUSE_GAME
    };
}

export const RESUME_GAME = 'RESUME_GAME';

export function resumeGame() {
    return {
        type: RESUME_GAME
    };
}

export const STOP_GAME = 'STOP_GAME';

export function stopGame() {
    return {
        type: STOP_GAME
    };
}

export const CHECK_TILE = 'CHECK_TILE';

export function checkTile(id) {
    return {
        type: CHECK_TILE,
        tileId: id
    }
}

export const DEACTIVATE_TILE = 'DEACTIVATE_TILE';

export function deactivateTile(id) {
    return {
        type: DEACTIVATE_TILE,
        tileId: id
    }
}

export const SET_NUM_TILES = 'SET_NUM_TILES';

export function setNumberOfTiles(numberOfTiles) {
    return {
        type: SET_NUM_TILES,
        numberOfTiles: numberOfTiles
    }
}

export const SET_SPEED = 'SET_SPEED';

export function setSpeedms(speedms) {
    return {
        type: SET_SPEED,
        speedms: speedms
    }
}

export const SET_NEW_SEQUENCE_BETWEEN_LEVELS = 'SET_NEW_SEQUENCE_BETWEEN_LEVELS';

export function setNewSequenceBetweenLevels(newSequenceBetweenLevels) {
    return {
        type: SET_NEW_SEQUENCE_BETWEEN_LEVELS,
        newSequenceBetweenLevels: newSequenceBetweenLevels
    }
}

export const SET_SETTINGS_POSITION_OR_COLOR = 'SET_SETTINGS_POSITION_OR_COLOR';

export function setSettingsPositionOrColor(positionOrColorOption) {
    return {
        type: SET_SETTINGS_POSITION_OR_COLOR,
        positionOrColorOption: positionOrColorOption
    }
}

export const SET_SETTINGS_SHUFFLE_TILES_AFTER_SEQUENCE = 'SET_SETTINGS_SHUFFLE_TILES_AFTER_SEQUENCE';

export function setSettingsShuffleTilesAfterSequenceOption(shuffleTilesAfterSequenceOption) {
    return {
        type: SET_SETTINGS_SHUFFLE_TILES_AFTER_SEQUENCE,
        shuffleTilesAfterSequenceOption: shuffleTilesAfterSequenceOption
    }
}
