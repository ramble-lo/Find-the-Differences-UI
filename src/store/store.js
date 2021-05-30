import {createStore,combineReducers} from 'redux'
import score from '../reducer/scoreReducer'
import timeScoreArray from '../reducer/timeScoreArrayReducer'
const store=createStore(combineReducers({score,timeScoreArray}))

export default store