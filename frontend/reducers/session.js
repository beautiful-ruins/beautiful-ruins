import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/user_actions';

const sessionReducer = (state={currentUser: null}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { currentUser: action.user.id };
        case REMOVE_CURRENT_USER:
            return { currentUser: null };
        default:
            return state;
    }
};

export default sessionReducer;