// const initialState = [];
const timeScoreArray = (state = [],action) => {
    switch(action.type){
        case 'addTimeScoreArray':
            return [...state, action.payload];
        case 'clearTimeScoreArray':
            return [];
        default:
            return state;
    }
}
export default timeScoreArray