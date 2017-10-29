import React from "react";
import { fetchData } from "../utils";

import { StockQuote } from "./StockQuote";

export class RightPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qutoe: null,
      news: [],
      chart: [],
    }
  }

  componentDidMount() {
    this.fetchStockBatchData();
  }

  fetchStockBatchData() {
    const api = "https://api.iextrading.com/1.0/stock/" + this.props.stockSymbol + "/batch?types=quote,news,chart&range=1m&last=10";
    fetchData(api, function(data) {
      this.setState({ 
        quote: data.quote,
        news: data.news,
        chart: data.chart,
      });
    }, this);
  }

  render() {
    if (!this.state.quote) {
      return null;
    }
    return (
      <div className="floatPanel rightPanel">
        <StockQuote symbol={this.props.stockSymbol} data={this.state.quote} />
      </div>
    );
  }
}
