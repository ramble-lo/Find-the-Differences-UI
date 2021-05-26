import React,{useState} from 'react'
import Header from '../Header'
import BeginContent from './BeginContent'
import Footer from '../Footer'
import BeginData from '../../../../../mode/begin.json'

const Begin = ({setIsBeginFinished}) => {
    const [beginIndex, setBeginIndex] = useState(0)
    const beginDataArrayLength = BeginData.length
    const loadingName = "Teaching"
    return (
        <>
            <Header/>
            <BeginContent 
                data={BeginData}
                index={beginIndex}
                setBeginIndex={setBeginIndex}
                setIsBeginFinished={setIsBeginFinished}
            />
            <Footer arrayIndex={beginIndex} arrayLength={beginDataArrayLength} loadingName={loadingName}/>
        </>
    )
}

export default Begin

