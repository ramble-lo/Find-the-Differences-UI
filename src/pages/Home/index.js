import React,{useState} from 'react';
import './index.scss';

import Result from './components/result/index';
import Test from './components/test/index';


const Home = () => {
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
