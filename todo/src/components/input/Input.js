import React from "react";
import '../../styles/input/input.css'

const Input = ({inputValue,handleChangeInputValue, handleEnterPressed}) => {
    return(
        <div className="input_container">
            <input type="text" className="input" placeholder="Add a Item" value={inputValue} onChange={e => handleChangeInputValue(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && inputValue.trim() && handleEnterPressed()}/>
        </div>
    )
}

export default Input;