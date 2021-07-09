import React, {useState} from 'react'
import { connect } from 'react-redux';
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
export default connect (null, mapDispatchToProps) (SignUp);
