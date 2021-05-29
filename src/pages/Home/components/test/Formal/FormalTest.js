import React,{useState,useEffect,useRef} from 'react'
import Header from '../Header'
import FormalContent from './FormalContent'
import Footer from '../Footer'

import data from '../../../../../mode/test.json'

const FormalTest = ({setIsFormalFinished}) => {
    const [testIndex, setTestIndex] = useState(0);
    const [levelIndex, setLevelIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [userAnswer, setUserAnswer] = useState(0);
    
    // const [timeScoreArray, setTimeScoreArray] = useState([]);

    const startTime = useRef(new Date().getTime())
    const timeScoreArray =useRef([])
    
    let easy = data.easy;
    let medium = data.medium;
    let hard = data.hard;
    let level = [easy,medium,hard];
    let formalDataArrayLength = level[levelIndex].length;
    let loadingName = level[levelIndex][testIndex].level;
    // let startTimeStamp = new Date().getTime();
    // console.log(`startTime:${startTime.current}`);
    
    
    // console.log('startTime.current = currentTime.current後面的startTime',startTime.current);
    
    // console.log(`costTime:${costTime.current}`);
    // if(costTime)
    useEffect(() => {
        // let costTime = 0
        console.log(`currentTime:${currentTime}`);
        //跳過第一次載入
        if(currentTime !== 0){
            let costTime = (currentTime - startTime.current)/1000;
            timeScoreArray.current.push(costTime);
        }

        // setTimeScoreArray(pre => { return [...pre, costTime]});
        // setRecordTime(pre => { return [...pre, (recoedTimeStamp - startTimeStamp) / 1000] });
        // console.log('timeScoreArray.current:',timeScoreArray.current);
        // console.log('costTime useEffect');
    }, [currentTime])
    
    return (
        <>  
            <Header 
                answer={level[levelIndex][testIndex].answer}
                userAnswer={userAnswer}
                timeScoreArray={timeScoreArray.current}
                timeScoreArrayLength={timeScoreArray.current.length}
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
