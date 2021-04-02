
    import Home from './Home';
    import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
    } from 'react-router-dom'
    import Dashboard from './Dashboard';
    
    
    
function Dashboard () {
 return(
 <Router>
  <div>
    
    
    <Switch>
    
    <Route exact path='/' component={Dashboard}/>
    <Route exact path='/Login' component={Login}/>
    <Route exact path='/Signup' component={Signup}/>
    <Route exact path='/Home' component={Home}/>
    
    
    
    </Switch>
    
    
    
    </div>
    </Router>
        
 )
    
}

export default Dashboard;