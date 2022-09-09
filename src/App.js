import React, {useState} from 'react';
import Header from './component/Header';
import Form from './component/Form';
import './App.css';
import Note from './component/Note';


function App() {
  const [notes, setNotes] = useState([])
  
  function addInput(userInput) {
    if(userInput.input === "" || userInput.textArea === "") {
      alert("Fill in your details");
      return
    }
    setNotes(prevNote => {
      return[
          ...prevNote, userInput,
     ];
  
})
     
  }
  function onDelete(id){
     
      setNotes(prevNote => {
        prevNote.filter((note, index) => {
          return index !==id;
        })
      })
  }
 
   
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
                           onDelete= {onDelete}
                       
                       />
                     )
                })}
          
          </div>

    </div>
  );
}

export default App;
