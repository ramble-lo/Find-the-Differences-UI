const addScore = value => ({ type: 'addScore', payload: value })
const addTimeScoreArray = value => ({ type: 'addTimeScoreArray', payload: value });
const clearTimeScoreArray = value => ({ type: 'clearTimeScoreArray', payload: value });
const clearScore = value => ({ type: 'clearScore', payload: value });

export { addScore,addTimeScoreArray,clearTimeScoreArray,clearScore }