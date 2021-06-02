import React,{useState,useEffect} from 'react';
import './index.scss';

import Result from './components/result/index';
import Test from './components/test/index';

import ReactGA from 'react-ga';
import KEY from '../../config.json'

const Home = () => {
    useEffect(() => {
        ReactGA.initialize(KEY.TRACKING_ID);
        ReactGA.pageview(window.location.pathname);
    }, [])
    const [isFormalFinished, setIsFormalFinished] = useState(false);
    useEffect(() => {
        console.log("Hi!🙋‍♂️\n\nI hope you can enjoy this game.\nAlthough you can find the answer from the DevTools.\nBut that ultimately lost the fun of the game.\nHave a good time!");
    }, [])
    
    return (
        <div className="container-outside">
            <div className="container-inside" style={{height:window.innerHeight}}>
                {isFormalFinished ? <Result setIsFormalFinished={setIsFormalFinished}/> : <Test setIsFormalFinished={setIsFormalFinished}/>}
            </div>
        </div>
    )
}

export default Home
