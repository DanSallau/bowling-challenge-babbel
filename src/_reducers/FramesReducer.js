import { SET_CURRENT_FRAME_INDEX } from '../_constants/ActionTypes';
const initialState = {
    
    frames:[
        {
            id: 0,
            player:'',
            isCurrentFrame: false,
        },
        {
            id: 1,
            player:'',
            isCurrentFrame: false,
        },
        {
            id: 2,
            player:'',
            isCurrentFrame: false,
        },
        {
            id: 3,
            player:'',
            isCurrentFrame: false,
        },
        {
            id: 4,
            player:'',
            isCurrentFrame: false,
        },
        {
            id: 5,
            player:'',
            isCurrentFrame: false,
        },
        {
            id: 6,
            player:'',
            isCurrentFrame: false,
        },
        {
            id: 7,
            player:'',
            isCurrentFrame: false,
        },
        {
            id: 8,
            player:'',
            isCurrentFrame: false,
        },
        {
            id: 9,
            player:'',
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