export function navReducer(state,action) {
    switch (action.type) {
        case 'show':
            return {...state,navShow:true};
        case 'hide':
            return {...state,navShow:false};
        default:
            return state;
    }
}