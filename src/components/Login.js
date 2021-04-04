import React, {useCallback, useContext} from 'react';
import {  Redirect } from "react-router";
import { AuthContext } from "./Auth.js";
import Fire from './Fire.js';
import {AiOutlineTwitter} from 'react-icons/ai';


const Login = ({ history }) => {

    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await Fire
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/Login");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );
    
      const { currentUser } = useContext(AuthContext);
    
      if (currentUser) {
        return <Redirect to="/Home" />;
      }


    return(
       <div>
         <form class='form' onSubmit={handleLogin} >
         <AiOutlineTwitter color='#1DA1F2' fontSize="6rem"/>
           <h2>Login</h2>
        <input className='input' name="email" type="email" placeholder='email'/>
        <br/>
        <input className='input' name="password" type="password" placeholder='password'/>
        <br/>
        <button type='submit' variant='primary'>Login</button>
        <br/>

           </form>

       </div>
    )

}

export default Login;