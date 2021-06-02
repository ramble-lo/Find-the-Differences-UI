const addScore = value => ({ type: 'addScore', payload: value });
const clearScore = value => ({ type: 'clearScore', payload: value });
const addTimeScoreArray = value => ({ type: 'addTimeScoreArray', payload: value });
const clearTimeScoreArray = value => ({ type: 'clearTimeScoreArray', payload: value });
const addUserAnswereArray = value => ({ type: 'addUserAnswereArray', payload: value });
const clearUserAnswereArray = value => ({ type: 'clearUserAnswereArray', payload: value });


export { addScore,clearScore,addTimeScoreArray,clearTimeScoreArray,addUserAnswereArray,clearUserAnswereArray }