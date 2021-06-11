import  React from 'react'

 export function addNote(newNote) {
    return {
        type: "ADD_NOTE",
        payload: newNote
       
    }
}

 export function deleteNote(id) {
     return{
         type: "DELETE_NOTE",
         payload: id,
     }
 }
 export function editNote(id, updatedNote) {
    return {
        type:"EDIT_NOTE",
        payload: { id: id, updatedNoteInfo: updatedNote}, 
    }
}
export default addNote;
