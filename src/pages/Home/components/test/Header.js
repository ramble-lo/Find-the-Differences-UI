import React,{useState,useEffect,useRef} from 'react'

const Header = ({
    answer,
    userAnswer,
    startTime,
    currentTime
}) => {
    const [finalScore, setFinalScore] = useState(0);
    const timeScoreArray =useRef([]);
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
        if(currentTime !== 0){
            let costTime = (currentTime - startTime)/1000;
            timeScoreArray.current.push(costTime);
        }
        let score = 0
        if(answer === userAnswer){
            score = calculateScore(Math.floor(timeScoreArray.current[timeScoreArray.current.length - 1]))
        }

        setFinalScore(pre => pre + score)
    }, [answer,startTime,userAnswer,currentTime])
    // if(timeScoreArray){
    //     console.log('timeScoreArray.length:',timeScoreArray.length);
    // }
    
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
