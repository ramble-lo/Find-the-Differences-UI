const score = (state=0,action) => {
    switch(action.type){
        case 'addScore':
            return state  + action.payload;
        case 'clearScore':
            return 0;
        default:
            return state;
    }
}
export default score