import React from 'react'
import beginCorrect from '../../../../media/begin-correct.png'
import beginWrong from '../../../../media/begin-wrong.png'
import Correct from '../../../../icons/Correct.svg'
import Wrong from '../../../../icons/Wrong.svg'

const Content = () => {
    return (
        <div className="content">
            <div className="pictures">
                <img src={beginCorrect} alt="pictures" className="green-box"/>
                <img src={beginWrong} alt="pictures" />
            </div>
            <div className="description">
                 <div className="test-description">
                    {/* <img src={Correct} alt="correct" /> */}
                    <p>Please choose correct interface</p>
                 </div>
                 <p className="begin-description">Click the green area</p>
            </div>
            <div className="button-area">
                <button className="green-box">Compare</button>
                <button>Next</button>
            </div>
        </div>
    )
}

export default Content
