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
    const [isFormalFinished, setIsFormalFinished] = useState(false)
    return (
        <div className="container-outside">
            <div className="container-inside">
                {isFormalFinished ? <Result setIsFormalFinished={setIsFormalFinished}/> : <Test setIsFormalFinished={setIsFormalFinished}/>}
            </div>
        </div>
    )
}

export default Home
