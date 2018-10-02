import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import About from './components/About'
import Stocks from './components/Stocks';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>NAVBAR</h1>
          <Switch>
            <Route exact path='/' component={Stocks} />
            <Route exact path='/Home' component={Stocks} />
            <Route exact path='/About' component={About}/> 
            <div>
              Hello from App.js
            </div>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
