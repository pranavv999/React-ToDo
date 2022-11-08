import React from "react";
import '../../styles/item/item.css'

const Item = ({item, handleRemoveItem}) => {
    return (
        <li className="list_parent">
            <p className="list_text">{item?.value}</p>
            <button className="remove_button" onClick={() =>{handleRemoveItem(item.id)}}>x</button>
        </li>
    )
};

export default Item;