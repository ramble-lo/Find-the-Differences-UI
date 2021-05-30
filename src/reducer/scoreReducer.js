const score = (state=0,action) => {
    switch(action.type){
        case 'addScore':
            console.log('addScore reducer執行');
            //...//
            return state  + action.payload;
        case 'clearScore':
            console.log('clearScore reducer執行');
            //...//
            return 0;
        default:
            return state;
        //有被調用的都被顯示出來
    }
}
export default score