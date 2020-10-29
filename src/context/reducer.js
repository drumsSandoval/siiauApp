export default (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'SET_DATES': 
            return {
                ...state,
                dates: action.payload,
            }
        case 'ADD_DATE': 
            return {
                ...state,
                dates: [...state.dates, action.payload]
            }
        default:
            return state
    }
};