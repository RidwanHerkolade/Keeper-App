import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';

function Form(props) {
     const [userInput, setUserInput] = useState({
          input : "",
          textArea: ""
     })
     function handleChange(event){
          const {name, value} = event.target;
          setUserInput(prevInput => {
               return {
                   ...prevInput,
                   [name]: value
               }
          })
     };
     function handleSubmit(event){
         event.preventDefault()
         props.onAdd(userInput)
         setUserInput({
             input : "",
             textArea: ""
        })
     }

     
     
     return(
         <div className='form__group'>
             <div className='form__groups'>
                 <form onSubmit={handleSubmit}>
                     <input
                         type="text"
                         placeholder="Title"
                         value={userInput.input}
                         name="input"
                         onChange={handleChange}
                     
                     
                     />
                     <textarea
                          type="text"
                         placeholder="Take a note..."
                         value={userInput.textArea}
                         name= "textArea"
                         onChange={handleChange}
                     
                     
                     
                     />
                     <button><AddIcon/></button>
                     
                 
                 
                 
                 </form>
             
             
             </div> 
             

         </div>
     )
}

export default Form;