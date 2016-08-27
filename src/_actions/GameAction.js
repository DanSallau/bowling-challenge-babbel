import * as types from '../_constants/ActionTypes';

export const setCurrentGame = id => ({
    type: types.SET_CURRENT_GAME,
});

export const addGame = players => ({
    type: types.ADD_GAME,
    players
});
