import React, { useState } from 'react'
import { connect } from 'react-redux';
import { editNote } from '../actions/notesActions';
 function EditNoteForm(props) {
     const [state, userState]= useState({
         title: props.note.title,
         date:  props.note.date,
         note:  props.note.note,
     });
     function handleOnChange(event) {
         userState({
             ...state,
             [event.target.name]: event.target.value,

             
            

         });;
     }
     function handleSubmit() {
         let note= { ...state, id:props.note.id };
         props.editNote(props.note.id,note);
         props.hideModal();
         console.log(note)
     }

    return (
        <div>
            <form>
                <div>
                    <label>Note Title</label>
                    <input type="text" name="title" value= {state.title} onChange= {handleOnChange}  />
                </div>

                <div>
                    <label>Date</label>
                    <input type="date" name="date"  value= {state.date} onChange = {handleOnChange} />
                </div>

                <div>
                    <label>Note</label>
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
let mapDispatchToProps = {
    editNote,
  }
var mapStateToProps= () =>{}

export default connect(mapStateToProps,mapDispatchToProps) (EditNoteForm);