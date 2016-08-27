import * as types from '../_constants/ActionTypes';

export const setNumberOfPlayers = id => ({
    type: types.SET_TOTAL_PLAYERS,
    id
});

export const setCurrentPlayer = name => ({
    type: types.SET_TOTAL_PLAYERS,
    name
});