import {createStore,combineReducers} from 'redux'
import score from '../reducer/scoreReducer'
import timeScoreArray from '../reducer/timeScoreArrayReducer'
import userAnswereArray from '../reducer/userAnswerArray'
const store=createStore(combineReducers({score,timeScoreArray,userAnswereArray}))

export default store