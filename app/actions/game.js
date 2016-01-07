export const PLAY_SEQUENCE = 'PLAY_SEQUENCE';

function* getSequence() {
    yield 1;
    yield 3;
    yield 2;
    yield 2;
    yield 1;
    yield 1;
    yield 3;
};

export function playSequence() {
    return {
        type: PLAY_SEQUENCE,
        id: getSequence().next().value
    };
}

