import React,{useState,useEffect,useRef} from 'react'
import Header from '../Header'
import FormalContent from './FormalContent'
import Footer from '../Footer'
import {useDispatch} from 'react-redux'
import {addTimeScoreArray} from '../../../../../actions/action'

import data from '../../../../../mode/test.json'

const FormalTest = ({setIsFormalFinished}) => {
    const [testIndex, setTestIndex] = useState(0);
    const [levelIndex, setLevelIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [userAnswer, setUserAnswer] = useState(0);
    const dispatch = useDispatch()
    const startTime = useRef(new Date().getTime())

    // let timeScoreArray = useSelector(state=>state.timeScoreArray);
    
    
    
    let easy = data.easy;
    let medium = data.medium;
    let hard = data.hard;
    let level = [easy,medium,hard];
    let formalDataArrayLength = level[levelIndex].length;
    let loadingName = level[levelIndex][testIndex].level;

    useEffect(() => {
        // let costTime = 0

        //跳過第一次載入
        if(currentTime !== 0){
            let costTime = (currentTime - startTime.current)/1000;
            dispatch(addTimeScoreArray(costTime))
        }
    }, [currentTime,dispatch])

    return (
        <>  
            <Header 
                answer={level[levelIndex][testIndex].answer}
                userAnswer={userAnswer}
                currentTime={currentTime}
                startTime={startTime.current}/>
            <FormalContent 
                data={level[levelIndex]}
                testIndex={testIndex}
                setTestIndex={setTestIndex}
                setLevelIndex={setLevelIndex}
                levelIndex={levelIndex}
                setCurrentTime={setCurrentTime}
                startTime={startTime}
                userAnswer={userAnswer}
                setUserAnswer={setUserAnswer}
                setIsFormalFinished={setIsFormalFinished}/>
            <Footer 
                arrayIndex={testIndex}
                arrayLength={formalDataArrayLength}
                loadingName={loadingName}/>
        </>
    )
}

export default FormalTest
