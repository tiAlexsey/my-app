const ENTRY = 'ENTRY';

let initialState = {
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENTRY:
            debugger;
            return { isAuth: !state.isAuth }
        default:
            return state;
    }
}

export const entry = () => ({ type: ENTRY })

export default authReducer;