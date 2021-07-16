import {useState} from 'react'
import { connect } from 'react-redux';
import NoteForm from '../Component/NoteForm';
import NoteList from '../Component/NoteList';
import {logout} from '../actions/authActions';


 function dashboard(props) {
    function handleLogout(){
       props.logout();
    }
   return (
         <div className ="container">
              <div className ="row">
                <div className ="col-md-6">
                <NoteForm  />
                <button type="button" style={{backgroundColor:'red',color:'black'}} onClick={handleLogout}>Logout</button> 
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
      
   );
}
const mapDispatchToProps = {logout};
export default connect(null,mapDispatchToProps) (dashboard);










