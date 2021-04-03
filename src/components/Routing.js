import {
    BrowserRouter as Router,
    Switch,
    Route
    } from 'react-router-dom'
    
    import Login from './Login';
    import Signup from './Signup';
    import Home from './Home';
    import Dashboard from './Dashboard'
    
function Routing () {
return(




<Router>

<div>





<Switch>
    <Route exact path='/' component={Dashboard}/>
  <Route path='/Home' component={Home}/>
</Switch>
     
    
    
  </div>
      

</Router>

)
}

export default Routing;