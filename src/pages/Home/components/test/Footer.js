import React from 'react'

const Footer = ({
    arrayIndex,
    arrayLength,
    loadingName
}) => {
    let step = arrayIndex + 1
    let loadingWidth = ((step / arrayLength)*100)+ "%"
    return (
        <div className="footer">
            <div className="loading-bar">
                <div className="loading" style={{width:loadingWidth}}></div>
                <span>{loadingName} {step}/{arrayLength}</span>
            </div>
            
        </div>
    )
}

export default Footer
