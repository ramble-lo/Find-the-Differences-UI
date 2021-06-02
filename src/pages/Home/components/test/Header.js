import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addScore} from '../../../../actions/action'

const Header = ({
    answer,
    userAnswer,
}) => {
    const dispatch = useDispatch()

    let finalScore = useSelector(state=>state.score);
    let timeScoreArray = useSelector(state=>state.timeScoreArray);
    let displayFinalScore
    if(finalScore === 0){
        displayFinalScore = "00000"
    }else if(finalScore < 100){
        displayFinalScore = "000" + finalScore
    }else if(finalScore < 1000){
        displayFinalScore = "00" + finalScore
    }else if(finalScore < 10000){
        displayFinalScore = "0" + finalScore
    }else{
        displayFinalScore = finalScore
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
    }, [timeScoreArray])

    const calculateScore = (time)=> {
        if(time <= 2){
            return 640
        }else if(time <= 4){
            return 320
        }else if(time <= 8){
            return 160
        }else if(time <= 16){
            return 80
        }else if(time <= 32){
            return 40
        }else if(time <= 64){
            return 20
        }else if(time > 64){
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
