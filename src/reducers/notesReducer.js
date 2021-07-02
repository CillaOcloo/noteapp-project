const initialState = {
    notes:[]
};
const notesReducer = (state= initialState,action)=> {
    switch(action.type){
        case 'ADD_ALL_NOTES':
            let notes = action.payload;
            return { notes: notes};
        case "ADD_NOTE":
         console.log(action.payload)
         return {...state,notes:[...state.notes,action.payload]};
        
        case "EDIT_NOTE":
        var id=  action.payload.id;
        let updatedNoteInfo = action.payload.updatedNoteInfo;
        let notesAfterUpdate= state.notes.map((note) =>{
            if (note.id === id){
                return updatedNoteInfo;
            }
            return note;
            console.log("notesAfterUpdate");

        });
        return { notes: notesAfterUpdate};

        case "DELETE_NOTE":
            var id = action.payload;
            var newNotes =state.notes.filter((note) => note.id !== id);
            return{
                notes:newNotes
            }
            default:
            return state;      

    }
}
export default notesReducer;