// const initialState = [];
const timeScoreArray = (state = [],action) => {
    switch(action.type){
        case 'addTimeScoreArray':
            console.log('addTimeScoreArray reducer執行');
            //...//
            // return state  + action.payload;
            return [...state, action.payload];
        case 'clearTimeScoreArray':
            console.log('clearTimeScoreArray reducer執行');
            //...//
            // return state  + action.payload;
            return [];
        default:
            return state;
        //有被調用的都被顯示出來
    }
}
export default timeScoreArray