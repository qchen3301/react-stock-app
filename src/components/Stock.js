import React, { Component } from 'react'

export default class Stock extends Component {

  state = {
    stocks: []
  }

  componentDidMount = async () => {
    const shortboi = this.props.match.params.symbol
    const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${shortboi}&interval=15min&outputsize=compact&apikey=undefined`)
  }

  render() {

    const stockSymbolMatch = this.props.stockList.find((stock)=> {
      return stock.symbol === this.props.match.params.symbol
    })

    return (
      <div>
        Hello from stock, singular!
        <h1>{this.props.stock}</h1>
      </div>
    )
  }
}
