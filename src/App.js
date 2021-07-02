import './App.css';
import NoteForm from './Component/NoteForm';
import NoteList from './Component/NoteList';
import Note from './Component/Note';
import { useState } from 'react';

 function App() {
   const [notes, setUsers]= useState([]);
   const [noteToUpdate, setNoteToUpdate]= useState({
    title: '',
    date: '',
    note: '',
   })

   function addNote (note) {
     setUsers([...notes, note]);
   }
   function deleteNote(id) {
     let newNotes = notes.filter((note)=> note.id !== id);
     setUsers(newNotes);
   }

   function updateNote (id, updatedNoteInfo){
     let newNotes = notes.map((note)=>{
       if (note.id === id) {
         return updatedNoteInfo;
       }
       return note;
     });
     setUsers(newNotes)
   }



  return (
    <div className ="container">
      <div className ="row">
        <div className ="col-md-6">
          <NoteForm  />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <NoteList />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default App;
