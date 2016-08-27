import { combineReducers } from 'react-redux';
import rolls from './RollReducer';
import players from './PlayerReducer';
import games from './GameReducer';
import frames from './FrameReducer';

export default combineReducers({
    rolls,
    players,
    games,
    frames
});