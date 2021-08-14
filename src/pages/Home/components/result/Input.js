import React,{useState,useEffect,useRef} from 'react'
import {useSelector} from 'react-redux'
import {firebase} from "../../../../initFirebase";

const Input = ({setIsInpitFinished}) => {
    const [playerName, setPlayerName] = useState("");
    const [playerOccupation, setOccupation] = useState("");
    const [playerResult, setPlayerResult] = useState({playerName:"",playerScore:"",timeScoreArray:[],playerTime:""})
    let finalScore = useSelector(state=>state.score);
    let timeScoreArray = useSelector(state=>state.timeScoreArray);
    let userAnswereArray = useSelector(state=>state.userAnswereArray);
    const playerTime = useRef(0);

    const db = firebase.database();

    useEffect(() => {
        //used on playerResult
        for(const timeScore of timeScoreArray){
            playerTime.current += timeScore
        }
        playerTime.current = Math.floor(playerTime.current)
    }, [timeScoreArray]);

    useEffect(() => {
        //player final result
        setPlayerResult({
            playerName:playerName,
            playerOccupation:playerOccupation,
            playerAnswer:userAnswereArray,
            playerScore:finalScore,
            timeScoreArray:timeScoreArray,
            playerTime:playerTime.current})
    }, [playerName,playerOccupation,finalScore])

    const handleChangePlayerName = (e) => {
        setPlayerName(e.target.value);
    }

    const handleChangeOccupation = (e) => {
        setOccupation(e.target.value)
    }

    const handleClickSubmit = () => {
        // submit data
        const playerDataRef = db.ref("playerData");
        const newPlayerDataRef = playerDataRef.push();
        newPlayerDataRef.set(playerResult);

        // get data
        // playerDataRef.on("value",(snapshot)=>{
        //     snapshot.forEach((childSnapshot)=>{
        //         let childData = childSnapshot.val();
        //         console.log(childData);
        //     });
        // });
  
        setIsInpitFinished(true)
    }

    return (
        <div className="user-input">
            <h3 className="title">Find the <br/>Differences UI</h3>
            <p className="description">What do you do?</p>
            <div className="occupation-input">
                <div className="vertical-alignment-box">
                    <label htmlFor="Designer"><input className="radio-input" type="radio" name="occupation" id="Designer" value="Designer" onChange={handleChangeOccupation}/><div className="radio"></div>Designer</label>
                    <label htmlFor="Engineer"><input className="radio-input" type="radio" name="occupation" id="Engineer" value="Engineer" onChange={handleChangeOccupation}/><div className="radio"></div>Engineer</label>
                    <label htmlFor="Else"><input className="radio-input" type="radio" name="occupation" id="Else" value="Else" onChange={handleChangeOccupation}/><div className="radio"></div>Else</label>
                </div>
            </div>
            <p className="description">Please entry your name</p>
            <input className="name-input" type="text" maxLength="10" onChange={handleChangePlayerName}/>
            <button className="button" onClick={handleClickSubmit}>Submit</button>
        </div>
    )
}

export default Input