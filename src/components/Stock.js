import React, { Component } from 'react'

export default class Stock extends Component {
  render() {

    const stock = this.props.stockList.find((stock)=> {
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
