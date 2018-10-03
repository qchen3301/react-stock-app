import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css'
import About from './components/About'
import Stocks from './components/Stocks';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className='navbar'>
            <h1>NAVBAR</h1>
            <Link to='/Home'>Home</Link> | <Link to='/About'>About </Link> | <Link to='/Stocks'>Stocks</Link>
            <div>
              Hello from App.js
            </div>
          </div>
          <Switch>
            <Route exact path='/Home' component={About} />
            <Route exact path='/About' component={About}/>
            <Route exact path='/Stocks' component={Stocks} /> 
          </Switch>
        </div>
      </Router>
    )
  }
}