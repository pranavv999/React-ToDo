import React from "react";
import '../../styles/button/submit-button.css'

const SubmitButton = ({handleAddItem, enterPressed}) => {
    return (
        <button type="submit" className="btn" style={enterPressed ?{'backgroundColor' : 'green'} : {}} onClick={handleAddItem}> + </button>
    )
}

export default SubmitButton;