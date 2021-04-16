import React from "react";

function InputArea(props){
   
        const [NotesPoints,setNotesPoints]=React.useState("")

        function handleChange(event){
            const newValue = event.target.value;
            setNotesPoints(newValue)
        }

         return(
      <div className="form">
        <input onChange={handleChange} value={NotesPoints} 
        type="text" />
        <button onClick={function() {
             props.addButton(NotesPoints)
             setNotesPoints("")
            }} >
          <span>Add</span>
        </button>
      </div>
    )

}
export default InputArea;