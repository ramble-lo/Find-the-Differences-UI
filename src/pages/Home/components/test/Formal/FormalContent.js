import React,{useState} from 'react'
import Correct from '../../../../../icons/Correct.svg'
import Wrong from '../../../../../icons/Wrong.svg'

const Content = ({
    data,
    testIndex,
    setTestIndex,
    setLevelIndex,
    setCurrentTime,
    startTime,
    userAnswer,
    setUserAnswer
}) => {
    const [buttonArea, setButtonArea] = useState(false);
    const [pictureOverlapping, setPictureOverlapping] = useState(true);
    const [isPictureClicked, setIsPictureClicked] = useState(false);
    const [firstCorrectStyle, setFirstCorrectStyle] = useState({});
    const [secondCorrectStyle, setSecondCorrectStyle] = useState({});

    const [descriptionIcon, setDescriptionIcon] = useState({})
    const [descriptionText, setDescriptionText] = useState("Please choose the correct interface")

    let answer = data[testIndex].answer
    let testDescription = data[testIndex].testDescription
    let introDescription = "Please choose the correct interface"

    // console.log('testIndex:',testIndex);
    const selectedPitcure = (userClick) => {
        let firstStyle
        let secondStyle
        let userAnswerClick = userClick
        let icon

        answer === userAnswerClick ? icon = Correct : icon = Wrong;
        answer === 1 ? firstStyle = {zIndex:"1"} : secondStyle = {zIndex:"1"};


        setCurrentTime(new Date().getTime());

        setIsPictureClicked(true)
        setFirstCorrectStyle(firstStyle);
        setSecondCorrectStyle(secondStyle);
        setButtonArea(true);
        setPictureOverlapping(false);
        setUserAnswer(userAnswerClick);
        setDescriptionIcon(icon);
        setDescriptionText(testDescription);
    }
    const handleClickFirstPicture = () => {
        if(isPictureClicked){
            return
        }
        console.log('handleClickFirstPicture');
        selectedPitcure(1);
    }
    const handleClickSecondPicture = () => {
        if(isPictureClicked){
            return
        }
        console.log('handleClickSecondPicture');
        selectedPitcure(2);
    }
    const handleClickNext = () => {
        let formalIndexEvent = 0;
        let plusLevelIndex = 0;
        let resetTestIndex = 0;

        startTime.current = new Date().getTime()

        //### 1.code review : Changing array
        if(testIndex < data.length - 1){
            formalIndexEvent = 1
        }
        if(testIndex === data.length - 1){
            plusLevelIndex = 1
            resetTestIndex = testIndex
        }
        // ###
        setIsPictureClicked(false)
        setTestIndex(pre => pre + formalIndexEvent - resetTestIndex);
        setLevelIndex(pre => pre + plusLevelIndex);
        setButtonArea(false);
        setPictureOverlapping(true);
        setDescriptionText(introDescription);
        setUserAnswer(0);
    }
    const handleClickCompare = (event) => {
        let firstStyle
        let secondStyle
        let hidden = {zIndex:"1",visibility: "hidden"}
        let visible = {zIndex:"1",visibility: "visible"}
        if(event.type === "mousedown" || event.type === "touchstart"){
            if(answer === 1){
                firstStyle = hidden
            }else if(answer === 2){
                secondStyle = hidden
                console.log('secondStyle = hidden');
            }
        }else if(event.type === "mouseup" || event.type === "touchend"){
            if(answer === 1){
                firstStyle = visible
            }else if(answer === 2){
                secondStyle = visible
            }
        }

        setFirstCorrectStyle(firstStyle);
        setSecondCorrectStyle(secondStyle);
    }

    return (
        <div className="content">
            <div className="pictures">
                <div className={pictureOverlapping ? "img-box" : "img-box first-box"}  style={firstCorrectStyle}>
                    <img onClick={handleClickFirstPicture} src={data[testIndex].firstPicture} alt="pictures" />
                </div>
                <div className={pictureOverlapping ? "img-box" : "img-box second-box"} style={secondCorrectStyle}>
                    <img onClick={handleClickSecondPicture} src={data[testIndex].secondPicture} alt="pictures" />
                </div>                
                
            </div>
            <div className="description">
                 <div className="test-description">
                    {userAnswer !== 0 ? <img src={descriptionIcon} alt={descriptionIcon} /> : null }
                    <p>{descriptionText}</p>
                 </div>
            </div>
            {buttonArea ? 
            <div className="button-area">
                <button onMouseDown={handleClickCompare} onMouseUp={handleClickCompare} onTouchStart={handleClickCompare} onTouchEnd={handleClickCompare}>Compare</button>
                <button onClick={handleClickNext}>Next</button>
            </div> : null}
        </div>
    )
}

export default Content


