import  React from 'react'

export function getAllNotes() {
    return (dispatch, state,{getFirestore})=>{
        const db = getFirestore();
        db.collection('notes').onSnapshot(
            (resultts)=> {
                let notes =[]
                resultts.forEach((doc)=>{
                    notes.push({...doc.data(), id:doc.id});
                });
                dispatch({
                    type:'ADD_ALL_NOTES',
                    payload:notes
                });
            },
            (error)=>{
                console.log(error);
            });
    };

}

 export function addNote(newNote) {
     return async (dispatch, state, {getFirestore})=>{
         const db = getFirestore();
         try {
             await db.collection('notes').add(newNote);
             
         } catch (error) {
             console.log(error)
             
         }
     }
    // return {
    //     type: "ADD_NOTE",
    //     payload: newNote    
    // }
}

 export function deleteNote(id) {
     return async (dispatch, state, {getFirestore})=>{
         const db = getFirestore();
         try {
             await db.collection('notes').doc(id).delete();
             
         } catch (error) {
             console.log(error);
             
         }
     }
    //  return{
    //      type: "DELETE_NOTE",
    //      payload: id,
    //  }
 }

 export function editNote(id, updatedNote) {
     return async (dispatch, state, {getFirestore})=>{
         const db = getFirestore();
         try {
             await db.collection('notes').doc(id).update(updatedNote)
             
         } catch (error) {
             console.log(error)
             
         }
     }
    // return {
    //     type:"EDIT_NOTE",
    //     payload: { id: id, updatedNoteInfo: updatedNote}, 
    // }
}
export default addNote;
