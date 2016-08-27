import { combineReducers } from 'redux';
import rolls from './RollReducer';
import players from './PlayerReducer';
import games from './GameReducer';
import frames from './FramesReducer';

export default combineReducers({
    rolls,
    players,
    games,
    frames
});