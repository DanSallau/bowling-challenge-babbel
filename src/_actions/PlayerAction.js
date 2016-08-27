import * as types from '../_constants/ActionTypes';

export const setCurrentPlayer = name => ({
    type: types.SET_CURRENT_PLAYER,
    name
});

export const setPlayerScore = name, score => ({
    type: types.SET_PLAYER_SCORE,
    name,
    score
});