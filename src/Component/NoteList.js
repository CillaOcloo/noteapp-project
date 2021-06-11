import React from 'react'
import { connect } from 'react-redux';
import Note from './Note';

 function NoteList(props) {
    return (
        <div>
            {props.notes.map((user) =>
            (<Note note ={user}
                delete={props.delete} 
                 editNote ={props.editNote}
              
                 />
                
                
            ))}
            
        </div>
    )
}
function mapStateToProps(state) {
    return {
        notes:state.notes
    }
}
export default connect(mapStateToProps,{}) (NoteList);
