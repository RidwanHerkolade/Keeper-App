import React, {useState} from 'react';
import Header from './component/Header';
import Form from './component/Form';
import './App.css';
import Note from './component/Note';

function App() {
  const [notes, setNotes] = useState([]);  
  
  // ADDING A CONDITIONAL STATEMENT INCASE IF AN EMPTY FIELD IS SUBMITTED
  function addInput(userInput) {
    if(userInput.input === "" || userInput.textArea === "") {
      alert("Fill in your details");
      return
    }
    setNotes(prevNotes => {
      return[
             ...prevNotes, 
             userInput,
     ];
  })
     
  };

  //  THE DELETE BUTTON FUNCTIONALITY
  function deleteNote(id){
      setNotes(prevNotes => {
        return (
          prevNotes.filter((note, index) => {
            return index !== id;
          })
        )
      
      })
  };
 
   
  return (
    <div className="App">
          <Header/>
          <Form 
             onAdd={addInput}
    
          />
       
          <div className="note__div">
                {notes.map((note, index) => {
                     return (
                       <Note
                           key={index}
                           id={index}
                           input={note.input}
                           textArea={note.textArea}
                           onDelete= {deleteNote}
                       
                       />
                     )
                })}
          
          </div>

    </div>
  );
}
export default App;
