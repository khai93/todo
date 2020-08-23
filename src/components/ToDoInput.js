import React, {useState} from 'react';

function ToDoInput(props) {
    const {items, setItems} = props;

    const [input, setInput] = useState("")

    const createTodoItem = (e) => {
        e.preventDefault();

        const appended = items.concat([{
            id: Math.floor(Math.random() * 100000),
            name: input,
            done: false
        }])

        setItems(appended)
    }


    return (
        <div>
            <form>
                <input type="text"  value={input} onChange={e => setInput(e.target.value)} name="todoItemCreate" placeholder="Enter a new todo"></input>
                <button onClick={createTodoItem}>Create</button>
            </form>
        </div>
    )
}

export default ToDoInput;