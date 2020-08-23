import React, { useState } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList'
import './App.css';

function App() {
  const [items, setItems] = useState([
    {
       id: 8383838,
       name: "Read Documentation",
       done: false
    },
    {
      id: 838,
      name: "Come up with a new idea",
      done: false
   },
   {
      id: 73763,
      name: "Look outside",
      done: true
   }
  ])

  return (
    <div className="App">
      <header>
        <h2>To-Do List</h2>
      </header>

      <ToDoInput items={items} setItems={setItems} />
      <ToDoList items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
