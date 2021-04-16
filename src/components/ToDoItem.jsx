import React from "react";

function ToDoItem(props) {
    // return(
    //     <div>
    //     <li>{props.text}</li>
    //     </div>

    // )
// THIS CODE BELOW IS FOR CR0SSING OUT THE TODO LIST
    const[IsDone,SetIsDone]=React.useState(false)

    function handleCrossLineClick(){
        SetIsDone(function (prevValue){
            return !prevValue;
        })
    }

  return(
        <div>
         <li style={{textDecoration: IsDone ? "line-through":"none"}} onClick={handleCrossLineClick}>
         {props.text}
         </li> 
        </div>
    )
}
export default ToDoItem;
