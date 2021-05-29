import React from 'react'

const Input = () => {
    return (
        <div className="user-input">
            <h3 className="title">Find the <br/>Differences UI</h3>
            <p className="description">Please entry your name</p>
            <input type="text" maxLength="10"/>
            <button className="button">Submit</button>
        </div>
    )
}

export default Input
