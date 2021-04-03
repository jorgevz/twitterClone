import {AiOutlineTwitter} from 'react-icons/ai';
import { Link } from 'react-router-dom';



function Dashboard () {

  return(
   


  <div>
    
<div className='register'>

<AiOutlineTwitter color='#1DA1F2' fontSize="5rem"/>
<h1>Join twitter </h1>
<span>Have an account ? login</span>


<Link to='/Login'  className='register-buttons'>Login</Link>
<br/>
<Link to='/Signup' className='register-buttons'>Sign Up</Link>

</div>

</div>


     
    
   

)
    
}

export default Dashboard;