import React from "react";
import { fetchData } from "../utils";

import { StockQuote } from "./StockQuote";
import { StockNews } from "./StockNews";
import { StockChart } from "./StockChart";

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

  componentWillUpdate() {
    this.fetchStockBatchData();
  }

  fetchStockBatchData() {
    const api = "https://api.iextrading.com/1.0/stock/" + this.props.stockSymbol + "/batch?types=quote,news,chart&range=3m&last=10";
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
        <StockQuote data={this.state.quote} symbol={this.props.stockSymbol} />
        <StockNews data={this.state.news} />
        <StockChart chart={this.state.chart} xAxis="date" yAxis="volume" />
      </div>
    );
  }
}
