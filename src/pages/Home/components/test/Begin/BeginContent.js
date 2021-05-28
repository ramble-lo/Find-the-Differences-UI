import React,{useState} from 'react'
import Correct from '../../../../../icons/Correct.svg'

const Content = ({
    data,
    index,
    setBeginIndex,
    setIsBeginFinished
}) => {
    const [buttonArea, setButtonArea] = useState(false);
    const [pictureOverlapping, setPictureOverlapping] = useState(false);
    const [firstCorrectStyle, setFirstCorrectStyle] = useState({});
    const [secondCorrectStyle, setSecondCorrectStyle] = useState({});
    const [userAnswer, setUserAnswer] = useState(0);
    const [descriptionIcon, setDescriptionIcon] = useState({})

    let answer = data[index].answer

    const handleClickFirstPicture = () => {
        console.log('handleClickFirstPicture');
        let firstStyle
        let secondStyle
        let beginIndexEvent = 0
        let userAnswerClick = 1
        let icon
        if(answer === 1){
            firstStyle = {zIndex:"1"}
            icon = Correct
        }
        if(index === 0){
            beginIndexEvent = 1;
        }
        setFirstCorrectStyle(firstStyle);
        setSecondCorrectStyle(secondStyle);
        setButtonArea(true);
        setPictureOverlapping(true);
        setBeginIndex(pre=> pre + beginIndexEvent);
        setUserAnswer(userAnswerClick);
        setDescriptionIcon(icon);
    }

    const handleClickNext = () => {
        let beginFinished = false
        if(data.length - 1 === index){
            beginFinished = true
        }
        setIsBeginFinished(beginFinished)
        console.log('beginFinished:',beginFinished);
    }
    const handleClickCompare = (event) => {
        let firstStyle
        let secondStyle
        let hidden = {zIndex:"1",visibility: "hidden"}
        let visible = {zIndex:"1",visibility: "visible"}
        let beginIndexEvent = 0
        if(event.type === "mousedown"){
            if(answer === 1){
                firstStyle = hidden
            }else if(answer === 2){
                secondStyle = hidden
            }
        }else if(event.type === "mouseup"){
            if(answer === 1){
                firstStyle = visible
            }else if(answer === 2){
                secondStyle = visible
            }
            if(index === 1){
                beginIndexEvent = 1;
            }
        }

        setFirstCorrectStyle(firstStyle);
        setSecondCorrectStyle(secondStyle);
        setBeginIndex(pre=> pre + beginIndexEvent);
    }

    return (
        <div className="content">
            <div className="pictures">
                <div className={pictureOverlapping ? "img-box first-box" : "img-box"}  style={firstCorrectStyle}>
                    <img onClick={handleClickFirstPicture} src="https://i.imgur.com/P1gABES.png" alt="pictures" className={data[index].picture ? "green-box" : null} />
                </div>
                <div className={pictureOverlapping ? "img-box second-box" : "img-box"} style={secondCorrectStyle}>
                    <img  src="https://i.imgur.com/ew5wvoX.png" alt="pictures" />
                </div>                
                
            </div>
            <div className="description">
                 <div className="test-description">
                    {userAnswer !== 0 ? <img src={descriptionIcon} alt={descriptionIcon} /> : null }
                    <p>{data[index].testDescription}</p>
                 </div>
                 <p className="begin-description">{data[index].beginDescription}</p>
            </div>
            {buttonArea ? 
            <div className="button-area">
                <button onMouseDown={handleClickCompare} onMouseUp={handleClickCompare} onTouchStart={handleClickCompare} onTouchEnd={handleClickCompare} className={data[index].compareButton ? "green-box" : null}>Compare</button>
                <button onClick={handleClickNext} className={data[index].nextButton ? "green-box" : null}>Next</button>
            </div> : null}
        </div>
    )
}

export default Content


