 import React, { useState } from 'react'
import { connect } from 'react-redux';
import addNote from '../actions/notesActions';

 

 function NoteForm(props) {
     const [state, setState]= useState({
         title: '',
         date: '',
         note: '',
     });
     function handleOnChange(event) {
         setState({
             ...state,
             [event.target.name]: event.target.value,

         });
     }
     function handleSubmit() {
         let noteId = 10000 +Math.random()*10000000;
         let note = { ...state, id: noteId };
         props.addNote(note);
     }

    return (
        <div>
            <form className="frm">
                <div className="info">
                    <label className="head">Note Title</label><br></br>
                    <input type="text" name="title" value= {state.title} onChange= {handleOnChange}  />
                </div> <br></br>

                <div>
                    <label className="head" >Date</label><br></br>
                    <input type="date" name="date"  value= {state.date} onChange = {handleOnChange} />
                </div><br></br>

                <div>
                    <label className="head">Note</label><br></br>
                    <input type="text" name="note" value= {state.note} onChange= {handleOnChange} />
                </div>
                <div>
                    <button type="button" className="btn" onClick= {handleSubmit} >
                        Save 
                    </button>
                </div>

            </form>
            
        </div>
    )
}
export default connect (null,{addNote}) (NoteForm);
