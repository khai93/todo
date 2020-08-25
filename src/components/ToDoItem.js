import React from 'react';

function ToDoItem(props) {
    return (
        <li>
            <p data-testid="item-name" className={props.done ? "done" : ""} onClick={() => props.handleClick(props.id)} onDoubleClick={()=> props.handleDoubleClick(props.id)}>
                {props.name}
            </p>
        </li>
    )
}

export default ToDoItem;