import React, {useState} from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../actions/authActions';


 function SignUp(props) {
    const [credentials, setCredentials]=useState({email:"", password:""});

     function handleOnChange(event) {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }
    
     function handleSubmit() {
          props.signUp(credentials.email, credentials.password);
              
          if(props.auth.isLoaded === false) {
            return <h1>Loading...</h1>;
        }
        if (props.auth.isEmpty === false){
            return <Redirect  path= "/"  />;
        }
    }
                 
    return (
        <div>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={credentials.email} onChange= {handleOnChange}  />
                </div>
                <div>
                    <labe>Password</labe>
                    <input type="password" name="password" value={credentials.password} onChange= {handleOnChange}  />
                </div>
                <div>
                <button type="button" className="btn" onClick={handleSubmit}>
                   SignUp
                </button>
                </div>
            </form>
            
        </div>
    )
}
const mapDispatchToProps = {signUp}
const mapStateToProps =(state) =>{
    return {
        auth:state.firebaseState.auth,
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (SignUp);
