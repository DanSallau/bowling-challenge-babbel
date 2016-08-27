import { SET_CURRENT_PLAYER, ADD_PLAYER, SET_PLAYER_SCORE, SET_HAS_STRIKE, SET_HAS_SPARE } from '../_constants/ActionTypes';
const initialState = {
    players:[]
};

export default(state = initialState, change) => {
    switch(change.type) {
        case SET_CURRENT_PLAYER: {
            state.players.map(obj => {
                obj.isCurrentPlayer = (obj.name === change.name );
            });
            return state;
        }
        case ADD_PLAYER: {
            state.players.push({
                id: state.players.length,
                name: change.name,
                score: 0,
                isCurrentPlayer: false,
                hasStrike: false,
                hasSpare: false,
            });
            return state;
        }
        case SET_PLAYER_SCORE: {
            state.players.find(x => (x.name === change.name)).score = change.score;
            return state;
        }
        case SET_HAS_STRIKE: {
            state.players.find(x => (x.name === change.name)).hasStrike = true;
            return state;
        }
        case SET_HAS_SPARE: {
            state.players.find(x => (x.name === change.name)).hasSpare = true;
            return state;
        }
        default:
            return state;
    }

}