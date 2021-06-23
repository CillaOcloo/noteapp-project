import React, { useState} from 'react'
import { Modal } from 'react-bootstrap';
import EditNoteForm from './EditNoteForm';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/notesActions';


 function Note(props) {
     const [isModalVisible,setShowModal] = useState (false);

 function showModal() {
         setShowModal(true);
        }

function hideModal() {
    setShowModal(false);
}
    return (
        <div className="details">
            
            <div className="row">
                <div className="col-md-2"> {props.note.title} </div>
                <div className="col-md-2"> {props.note.date} </div>
                <div className="col-md-4"> {props.note.note} </div>
                <div className="col-md-4">
                <button className="updt" onClick={showModal}> Edit</button>
                   <Modal show={isModalVisible} onHide={hideModal}>
                    <Modal.Header clodeButton>
                     <Modal.Title>Edit Notes</Modal.Title>
                   </Modal.Header>
                   <Modal.Body><EditNoteForm
                   note={props.note}
                   hideModal={hideModal}/>
                    </Modal.Body>
                 </Modal>
               <button className="rvm" onClick={() => { 
                    props.deleteNote(props.note.id)
                    }}>Delete </button>
                </div>
            
            </div>
           
            
        </div>
    )
}
let mapDispatchToProps = {
    deleteNote,
} 
var mapStateToProps = () => {}
export default connect(mapStateToProps,mapDispatchToProps) (Note);
