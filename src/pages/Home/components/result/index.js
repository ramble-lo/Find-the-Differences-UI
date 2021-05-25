import React from 'react'
// import Input from './Input'
import Score from './Score'
import GitHub from '../../../icons/GitHub.svg';

const Result = () => {
    return (
        <div className="result">
            {/* <Input/> */}
            <Score/>
            <a href="https://github.com/s490607" target="_blank">Created by Rambo Lo<img src={GitHub} alt="GitHub" /></a>
        </div>
    )
}

export default Result
