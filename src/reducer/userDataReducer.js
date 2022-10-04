export function reducer(state, action) {
    switch (action.type) {
        case "SET_DATA" :
            return {
                ...state,
                [action.key] : action.value
            };

        default:
            return state;
    }
}