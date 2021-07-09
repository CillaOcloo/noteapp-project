import {useState} from 'react'
import NoteForm from '../Component/NoteForm'
import NoteList from '../Component/NoteList'


 function dashboard() {
    return (
        <div>
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
 </div>
)
}
export default dashboard;
