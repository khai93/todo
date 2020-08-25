import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoList(props) {
    const {items, setItems} = props;

    if (!items || !items.length) {
        return <div>No Items</div>
    }

    const toggleItem = (id) => {
        const editedItems = items.map(item => {
            if (item.id === id) {
                item.done = !item.done;
            }

            return item;
        });
        
        setItems(editedItems)
    }

    const deleteItem = (id) => {
        const editedItems = items.filter(item => item.id !== id);

        setItems(editedItems)
    }

    return (
        <ul>
            {
                props.items.map((item) => {
                    return (
                        <ToDoItem data-testid="item-name" handleClick={toggleItem} handleDoubleClick={deleteItem} id={item.id} key={item.id} name={item.name} done={item.done}/>
                    )
                })
            }    
        </ul>
    )
}

export default ToDoList