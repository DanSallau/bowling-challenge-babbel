import * as types from '../_constants/ActionTypes';

export const setCurrentPlayer = name => ({
    type: types.SET_CURRENT_PLAYER,
    name
});

export const addPlayer = name => ({
    type: types.ADD_PLAYER,
    name
});

export const setPlayerScore = (name, score) => ({
    type: types.SET_PLAYER_SCORE,
    name,
    score
});

export const setHasStrike = name => ({
    type: types.SET_HAS_STRIKE,
    name
});

export const setHasSpare = name => ({
    type: types.SET_HAS_SPARE,
    name
});