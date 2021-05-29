import React,{useState} from 'react'

import BeginTest from './Begin/BeginTest'
import FormalTest from './Formal/FormalTest'

const Test = ({setIsFormalFinished}) => {
    const [isBeginFinished, setIsBeginFinished] = useState(false)
    
    return (
        <>
            {isBeginFinished ? <FormalTest setIsFormalFinished={setIsFormalFinished}/> : <BeginTest setIsBeginFinished={setIsBeginFinished}/>}
        </>
    )
}

export default Test
