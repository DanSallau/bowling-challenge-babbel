import { ADD_GAME,SET_CURRENT_GAME } from '../_constants/ActionTypes';
const initialState = {
    games:[]
};

export default(state = initialState, change) => {
    switch(change.type) {
        case SET_CURRENT_GAME: {
            state.games.map(obj => {
                obj.isCurrentGame = (obj.id === state.games.length );
            });
            return state;
        }
        case ADD_GAME: {
            state.games.push({
                id: state.games.length,
                players: change.players,
                isCurrentGame: false,
            })
            return
        }
        default:
            return state;
    }

}