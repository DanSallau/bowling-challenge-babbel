import { SET_CURRENT_FRAME_INDEX } from '../_constants/ActionTypes';
const initialState = {
    
    frames:[
        {
            id: 0,
            isCurrentFrame: false,
        },
        {
            id: 1,
            isCurrentFrame: false,
        },
        {
            id: 2,
            isCurrentFrame: false,
        },
        {
            id: 3,
            isCurrentFrame: false,
        },
        {
            id: 4,
            isCurrentFrame: false,
        },
        {
            id: 5,
            isCurrentFrame: false,
        },
        {
            id: 6,
            isCurrentFrame: false,
        },
        {
            id: 7,
            isCurrentFrame: false,
        },
        {
            id: 8,
            isCurrentFrame: false,
        },
        {
            id: 9,
            isCurrentFrame: false,
        }
    ]
};

export default(state = initialState, change) => {
    switch(change.type) {
        case SET_CURRENT_FRAME_INDEX: {
            state.frames.map(obj => {
                obj.isCurrentFrame = (obj.id === change.id );
                // obj.player = change.player;
            });
            return state;
        }
        default:
            return state;
    }

}