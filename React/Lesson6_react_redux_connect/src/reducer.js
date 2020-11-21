const reducer = (state = 0, active) => {
    switch (active.type) {
        case 'INC':
            return state + active.payload;
        case 'DEC':
            return state + active.payload;
        case 'ASD':
            return state * active.payload;
        case 'RES':
            return state = 0;
        default:
            return state;
    }
}
export default reducer;
