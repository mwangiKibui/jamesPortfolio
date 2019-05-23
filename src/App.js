import React, { Component } from 'react';
import Home from './Components/Home';
import Services from './Components/Services';
import { Provider} from './Context';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'

class App extends Component{
state = {}
render(){
  return(
    <Provider>
      <Router>
        <Switch>
         <Route exact path="/" component={Home}></Route> 
         <Route exact path="/" component={Services}></Route> 
         </Switch>    
      </Router>      
    </Provider>
  )
}
}
export default App;

