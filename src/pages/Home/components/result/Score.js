import React from 'react';
import Facebook from '../../../../icons/Facebook.svg';
import Twitter from '../../../../icons/Twitter.svg';

const Score = () => {
    return (
        <div className="score">
            <h3 className="title">Find the <br/>Differences UI</h3>
            <div className="result-data">
                <span className="result-score">03310</span>
                <div className="vertical-bar"></div>
                <span className="result-time">07:47</span>
            </div>
            <p className="description">You have won <span>70%</span> of challengers</p>
            <div className="social-media">
                <button><img src={Facebook} alt="facebook" />Facebook</button>
                <button><img src={Twitter} alt="twitter" />Twitter</button>
            </div>
            <div className="chart"></div>
            <button>Play Again</button>
        </div>
    )
}

export default Score
