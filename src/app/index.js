import React from "react";
import ReactDOM from 'react-dom';
import { reader } from "react-dom";
import { StockLists } from "./components/StockLists";
import { StockDetails } from "./components/StockDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockSymbol: "",
      stockDetails: {
        quote: {},
        news: [],
        chart: [],
      }
    };
  }

  handleCellClick(e) {
    let stockCode = e.currentTarget.title;
    if (stockCode) {
      let tempapi = "https://api.iextrading.com/1.0/stock/" + stockCode + "/batch?types=quote,news,chart&range=1m&last=10";
      fetchData(tempapi, function(data) {
        this.setState({
          stockDetails: data,
          stockSymbol: data.quote.symbol,
        });
      }, this);
    }
  }

  render() {
    return (
      <div>
        <StockLists onClickHandler={this.handleCellClick.bind(this)} />
        <StockDetails stockSymbol={this.state.stockSymbol}
                    quote={this.state.stockDetails.quote}
                    news={this.state.stockDetails.news}
                    chart={this.state.stockDetails.chart} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root"),
);