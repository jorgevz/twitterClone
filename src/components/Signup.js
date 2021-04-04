import React, {useCallback} from 'react';
import { withRouter } from "react-router";
import Fire from "./Fire";
import {AiOutlineTwitter} from 'react-icons/ai';


const Signup = ({history}) => {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await Fire
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
          history.push("/Home");
        } catch (error)
        {
          alert(error);
        }
      }, [history]);

    return(
       <div>
              <form class='form' onSubmit={handleSignUp} >
              <AiOutlineTwitter color='#1DA1F2' fontSize="5rem"/>
                <h2>Signup Today !</h2>
        <input name="email" type="email" className='input' placeholder='email'/>
        <br/>
        <input name="password" type="password" className='input' placeholder='password'/>
        <br/>
        <button type='submit' variant='info'>Register</button>

           </form>

       </div>
    )

}

export default withRouter (Signup);