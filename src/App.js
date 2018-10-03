import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css'
import About from './components/About'
import Stocks from './components/Stocks';
import Stock from './components/Stock';
import axios from 'axios'

export default class App extends Component {

  state = {
    stocks: []
  }

  componentDidMount = async () => {
    const response = await axios.get('https://ga-stocks.herokuapp.com/stocks')
    let stocks = response.data
    this.setState({stocks})
  }

  render() {

    // const StockComponent = (props) => {
    //   <Stock stocksList = {this.state.stocksList} {...props} />
    // }

    const StocksComponent = () => (
      <Stocks stocksList={this.state.stocks} />
    )

    return (
      <Router>
        <div>
          <div className='navbar'>
            <h1>NAVBAR</h1>
            <Link to='/Home'>Home</Link> | <Link to='/About'>About </Link>
            
            <div>
              Hello from App.js
            </div>
          </div>
          <Switch>
            {/* <Route exact path='/' component={Stocks} /> */}
            <Route exact path='/Home' component={StocksComponent} />
            <Route exact path='/About' component={About}/> 
          </Switch>
        </div>
      </Router>
    )
  }
}