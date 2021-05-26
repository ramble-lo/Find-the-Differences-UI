import React,{useState} from 'react'
import Header from '../Header'
import Content from './FormalContent'
import Footer from '../Footer'

import data from '../../../../../mode/test.json'

const FormalTest = () => {
    const [testIndex, setTestIndex] = useState(0);
    const [levelIndex, setLevelIndex] = useState(0);
    let easy = data.easy;
    let medium = data.medium;
    let hard = data.hard;
    let level = [easy,medium,hard];
    let formalDataArrayLength = level[levelIndex].length;
    let loadingName = level[levelIndex][testIndex].level;
    // useEffect(() => {
    //     let plusLevelIndex = 0
    //     let resetTestIndex = 0

    //     //### 1.code review
    //     if(testIndex === level[levelIndex].length - 1){
    //         plusLevelIndex = 1
    //         resetTestIndex = testIndex
    //         console.log('index = 1');
    //     }
    //     //##
    //     setLevelIndex(pre => pre + plusLevelIndex)
    //     setTestIndex(pre => pre - resetTestIndex)
    //     console.log('useEffect testIndex');
    //     console.log(`testIndex:${testIndex}`);
    //     console.log(`level[0].length:${level[levelIndex].length}`);
    // }, [testIndex,levelIndex])

    // console.log(`${level[levelIndex]}`);
    
    return (
        <>  
            <Header/>
            <Content testIndex={testIndex} setTestIndex={setTestIndex} data={level[levelIndex]} setLevelIndex={setLevelIndex}/>
            <Footer arrayIndex={testIndex} arrayLength={formalDataArrayLength} loadingName={loadingName}/>
        </>
    )
}

export default FormalTest
