import React,{useState} from 'react'
import Input from './Input'
import Score from './Score'
import GitHub from '../../../../icons/GitHub.svg';

const Result = ({setIsFormalFinished}) => {
    const [isInpitFinished, setIsInpitFinished] = useState(false)
    return (
        <div className="result">
            {isInpitFinished ? <Score setIsFormalFinished={setIsFormalFinished}/> :  <Input setIsInpitFinished={setIsInpitFinished}/>}
            {/* <Input setIsInpitFinished={setIsInpitFinished}/> */}
            <a href="https://github.com/s490607" target="_blank" rel="noreferrer noopener">Created by Rambo Lo<img src={GitHub} alt="GitHub" /></a>
        </div>
    )
}

export default Result
