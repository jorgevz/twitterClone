import {
    BrowserRouter as Router,
    Switch,
    Route
    } from 'react-router-dom'
    import Login from './Login';
    import Signup from './Signup';
    import Home from './Home';
    import Dashboard from './Dashboard';
    import { AuthProvider } from "./Auth";
    import PrivateRoute from "./PrivateRoute";
    
function Routing () {
return(


<AuthProvider>
<Router>

<div>





<Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route path='/Login' component={Login}/>
    <Route path='/Signup' component={Signup}/>
    <PrivateRoute path='/Home' component={Home}/>
</Switch>
     
    
    
  </div>
      

</Router>
</AuthProvider>

)
}

export default Routing;