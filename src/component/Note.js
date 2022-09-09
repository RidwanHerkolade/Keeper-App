import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function handleClick(props){
  props.onDelete(props.id)
}

function Note(props){
  return (
      <div className="form__groups">
         <form>
            <input

                 type="text"
                 placeholder={props.input}
                  
            />
            <textarea
                   type="text"
                     placeholder={props.textArea}
       
            />
            <button className="delete" onClick={handleClick}>
            <DeleteIcon/>
               
            
            
            </button>
         
         
         
         </form>
      
      
      </div>
  )
}
export default Note;