import * as types from '../_constants/ActionTypes';

export const setFrameIndex = (id, playerName) => ({
    type: types.SET_CURRENT_FRAME_INDEX,
    id,
    player: playerName
});