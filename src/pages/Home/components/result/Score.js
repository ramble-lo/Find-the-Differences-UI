import React,{useState,useEffect} from 'react';
import {FacebookShareButton,TwitterShareButton} from 'react-share';
import Facebook from '../../../../icons/Facebook.svg';
import Twitter from '../../../../icons/Twitter.svg';
import {useSelector,useDispatch} from 'react-redux'
import {clearTimeScoreArray,clearUserAnswereArray,clearScore} from '../../../../actions/action'

const Score = ({setIsFormalFinished}) => {
    const [playerTime, setPlayerTime] = useState(0);
    const dispatch = useDispatch();
    let finalScore = useSelector(state=>state.score);
    let timeScoreArray = useSelector(state=>state.timeScoreArray);
    useEffect(() => {
        //Convert time to display
        let time = 0
        for(const timeScore of timeScoreArray){
            time += timeScore
        }
        time = Math.floor(time);
        setPlayerTime(timeFormatConvert(time))
    }, [timeScoreArray]);

    let rankStyleObject = {rank:"God",rankColor:"#772ce8"}
    if(finalScore <= 10000){
        rankStyleObject = {rank:"Brozne",rankColor:"#CD7F32"}
    }else if(finalScore <= 15000){
        rankStyleObject = {rank:"Silver",rankColor:"#C0C0C0"}
    }else if(finalScore <= 20000){
        rankStyleObject = {rank:"Gold",rankColor:"#FFD700"}
    }

    const timeFormatConvert = (time) => {
        let resultTime = 0
        let min = 0
        let sec = 0
        while(time >= 60){
            min += 1
            time -= 60
        }
        sec = time
        if(min < 10){
            min = `0${min}`
        }
        if(sec < 10){
            sec = `0${sec}`
        }
        resultTime = `${min}:${sec}`
        return resultTime
    }

    const handleClickPlayAgain = () => {
        setIsFormalFinished(false);
        dispatch(clearTimeScoreArray([]));
        dispatch(clearUserAnswereArray([]));
        dispatch(clearScore(0));
    }

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
    return (
        <div className="score">
            <h3 className="title">Find the <br/>Differences UI</h3>
            <div className="result-data">
                <span className="result-score">{displayFinalScore}</span>
                <div className="vertical-bar"></div>
                <span className="result-time">{playerTime}</span>
            </div>
            {/* <p className="description">You have won <span>70%</span> of challengers</p> */}
            <p className="description">Rank:<span style={{backgroundColor:rankStyleObject.rankColor}}>{rankStyleObject.rank}</span> </p>
            {/* <p className="description">Rank:<span style={{backgroundColor:"#C0C0C0"}}>Silver</span> </p>
            <p className="description">Rank:<span style={{backgroundColor:"#FFD700"}}>Brozne</span> </p> */}
            <div className="social-media">
                <FacebookShareButton resetButtonStyle={false} url="https://s490607.github.io/Find-the-Differences-UI/" quote={"Find the Differences UI"}>
                    <img src={Facebook} alt="facebook" />Facebook
                </FacebookShareButton>
                <TwitterShareButton resetButtonStyle={false} url="https://s490607.github.io/Find-the-Differences-UI/" quote={"Find the Differences UI"}>
                    <img src={Twitter} alt="twitter" />Twitter
                </TwitterShareButton>
            </div>
            <div className="chart"></div>
            <button onClick={handleClickPlayAgain}>Play Again</button>
        </div>
    )
}

export default Score
