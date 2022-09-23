import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props){
  
function handleDelete(e){
  e.preventDefault()
  props.onDelete(props.id)
}

  return (
      <div className="form__groups">
         <form onSubmit={handleDelete}>
            <input

                 type="text"
                 placeholder={props.input}
                  
            />
            <textarea
                   type="text"
                     placeholder={props.textArea}
       
            />
            <button className="delete">
            <DeleteIcon/>
               
            
            
            </button>
         
         
         
         </form>
      
      
      </div>
  )
}
export default Note;