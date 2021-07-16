import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getAllNotes } from '../actions/notesActions';
import Note from './Note';


 function NoteList(props) {
     useEffect(() =>{
         props.getAllNotes();

     }, [])


    return (
        <div>
            {props.notes.map((user) =>(
            <Note note ={user}
                delete={props.delete} 
                 editNote ={props.editNote}
              
                 />
                
                
            ))}
            
        </div>
    )
}
function mapStateToProps(state) {
    return {
      notes:state.noteState.notes,
    }
  }
  const mapDispatchToProps ={
    getAllNotes,
  };

export default connect(mapStateToProps,mapDispatchToProps) (NoteList);
