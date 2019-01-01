const initialState = {
    value: 0
}

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {

        case 'GET_LIKE_COUNTER':
            return {
                ...state,
            };

        case 'GET_LIKE_COUNTER_SUCCESS':
            return {
                ...state,
                value: action.payload
            };

        case 'GET_LIKE_COUNTER_FAIL':
            return {
                ...state,
                value: action.payload
            }

        default:
            return state
    }
};