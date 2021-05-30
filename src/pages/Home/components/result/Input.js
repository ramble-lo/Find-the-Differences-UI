import React,{useState,useEffect,useRef} from 'react'
import {useSelector} from 'react-redux'

const Input = ({setIsInpitFinished}) => {
    const [playerName, setPlayerName] = useState("")
    const [playerResult, setPlayerResult] = useState({playerName:"",playerScore:"",playerTime:""})
    let finalScore = useSelector(state=>state.score);
    let timeScoreArray = useSelector(state=>state.timeScoreArray);
    const playerTime = useRef(0)
    useEffect(() => {
        //used on playerResult
        for(let i = 0; i < timeScoreArray.length; i++){
            playerTime.current += timeScoreArray[i];
            console.log('playerTime.current:',playerTime.current);
        }
        playerTime.current = Math.floor(playerTime.current)
    }, [timeScoreArray]);

    useEffect(() => {
        //player final result
        setPlayerResult({playerName:playerName,playerScore:finalScore,playerTime:playerTime.current})
    }, [playerName,finalScore])

    const handleChangePlayerName = (e) => {
        setPlayerName(e.target.value);
    }

    const handleClickSubmit = () => {
        console.log(playerResult);
        console.log(playerTime.current);
        console.log(timeScoreArray);
        setIsInpitFinished(true)
    }

    console.log(playerName);
    return (
        <div className="user-input">
            <h3 className="title">Find the <br/>Differences UI</h3>
            <p className="description">Please entry your name</p>
            <input type="text" maxLength="10" onChange={handleChangePlayerName}/>
            <button className="button" onClick={handleClickSubmit}>Submit</button>
        </div>
    )
}

export default Input