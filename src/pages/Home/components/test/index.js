import React,{useState} from 'react'

import BeginTest from './Begin/BeginTest'
import FormalTest from './Formal/FormalTest'

const Test = () => {
    const [isBeginFinished, setIsBeginFinished] = useState(false)
    return (
        <>
            {isBeginFinished ? <FormalTest/> : <BeginTest setIsBeginFinished={setIsBeginFinished}/>}
        </>
    )
}

export default Test
