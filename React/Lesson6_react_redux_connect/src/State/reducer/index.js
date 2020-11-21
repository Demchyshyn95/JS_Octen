import {LOADING_USERS, SELECT} from "../actions_type";

export const initialState = {
    users: [],
    selecteds: []
}

export const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case LOADING_USERS: {
            return {...state, users: actions.payload};
        }
        case SELECT: {
            const newSelecteds = [...state.selecteds];
            if (state.selecteds.find(el => el.id === actions.payload.id)) {
                return {...state, selecteds: state.selecteds.filter(el => el.id !== actions.payload.id)}
            } else {
                newSelecteds.push(actions.payload);
                return {...state, selecteds: newSelecteds}
            }
        }
        default:
            return state;
    }
}
