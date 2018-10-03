import React, { Component } from 'react'
import axios from 'axios'
export default class Stocks extends Component {

  state = {
    stocks: []
  }

  componentDidMount = async () => {
    const response = await axios.get('https://ga-stocks.herokuapp.com/stocks')
    let stocks = response.data
    this.setState({stocks})
  }
  render() {

    const stocksDoge = this.state.stocks.map((stock, i) => {
      return <div key={i}>{stock.name}</div>
    })

    return (
      <div>
        Hello from stocks, plural!
        {stocksDoge}
      </div>
    )
  }
}
