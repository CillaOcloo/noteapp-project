import './App.css';
import NoteForm from './Component/NoteForm';
import NoteList from './Component/NoteList';
import Note from './Component/Note';
import { useState } from 'react';

 function App() {
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
