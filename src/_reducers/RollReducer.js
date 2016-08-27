import { SET_CURRENT_ROLL } from '../_constants/ActionTypes';
const initialState = {
    rolls:[
        {
            id: 0,
            isCurrentRole: false
        },
        {
            id: 1,
            isCurrentRole: false
        }
    ]
};

export default(state = initialState, change) => {
    switch(change.type) {
        case SET_CURRENT_ROLL: {
            state.rolls.map(obj => {
                obj.isCurrentRole = (obj.id === change.id);
            });
            return state;
        }
        default:
            return state;
    }

}