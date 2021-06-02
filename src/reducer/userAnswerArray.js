// const initialState = [];
const userAnswereArray = (state = [],action) => {
    switch(action.type){
        case 'addUserAnswereArray':
            return [...state, action.payload];
        case 'clearUserAnswereArray':
            return [];
        default:
            return state;
    }
}
export default userAnswereArray