import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addScore} from '../../../../actions/action'

const Header = ({
    answer,
    userAnswer,
    currentTime,
    startTime,
}) => {
    const dispatch = useDispatch()

    let finalScore = useSelector(state=>state.score);
    let timeScoreArray = useSelector(state=>state.timeScoreArray);
    let displayFinalScore = "00000"
    if(finalScore === 0){
        displayFinalScore = "00000"
    }else if(finalScore < 100){
        displayFinalScore = "000" + finalScore
    }else if(finalScore < 1000){
        displayFinalScore = "00" + finalScore
    }else if(finalScore < 10000){
        displayFinalScore = "0" + finalScore
    }

    useEffect(() => {
        let score = 0
        let timeScore = timeScoreArray[timeScoreArray.length - 1]
        if(answer === userAnswer){
            if(timeScore){
                score = calculateScore(Math.floor(timeScore))
            }
        }
        dispatch(addScore(score));//update score
    }, [timeScoreArray,answer,startTime,userAnswer,currentTime,dispatch])

    
    const calculateScore = (time)=> {
        if(time <= 2){
            return 640
        }else if(time <= 6){
            return 320
        }else if(time <= 12){
            return 160
        }else if(time <= 24){
            return 80
        }else if(time <= 48){
            return 40
        }else if(time <= 96){
            return 20
        }else if(time > 96){
            return 10
        }
    }

    return (
        <div className="header">
            <h3 className="title">
                Find the <br/>Differences UI
            </h3>
            <h3 className="score">
                {displayFinalScore}
            </h3>
        </div>
    )
}

export default Header
