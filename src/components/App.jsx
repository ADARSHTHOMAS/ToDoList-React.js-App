import React from "react";
import ToDoItem from "./ToDoItem"
import InputArea from "./InputArea"


function App() {
      
    const[Items,setItems]=React.useState([])
   
    function handleAddClick(NotesPoints){
      setItems(prevValue =>
       { return [...prevValue,NotesPoints]})
        
        }

    
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
      addButton={handleAddClick} 
      />
     <div>
        <ul>
        {Items.map(function (todoItem){
          return <ToDoItem
          text={todoItem} 
          />
        })}
        </ul>
      </div>
    </div>
  );
}

export default App;