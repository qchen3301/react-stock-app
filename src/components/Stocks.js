import React, { Component } from 'react'

export default class Stocks extends Component {

  render() {

    const stocksDoge = this.props.stocksList.map((stock, i) => {
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
