import { SET_CURRENT_FRAME_INDEX } from '../_constants/ActionTypes';
const initialState = {
    
    frames:[
        {
            id: 0,
            player:'',
            isCurrentFrame: false,
        }
    ]
};

export default(state = initialState, change) => {
    switch(change.type) {
        case SET_CURRENT_FRAME_INDEX: {
            state.frames.map(obj => {
                obj.isCurrentFrame = (obj.id ===change.id );
                obj.player = change.player;
            });
            return state;
        }
        default:
            return state;
    }

}