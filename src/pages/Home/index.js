import React from 'react';
import './index.scss';

// import Result from './components/Result';
import Test from './components/test/index';


const Home = () => {
    return (
        <div className="container-outside">
            <div className="container-inside">
                <Test/>
                {/* <Result/> */}
            </div>
        </div>
    )
}

export default Home
