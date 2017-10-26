import React from "react";
import ReactDOM from 'react-dom';
import { StockLists } from "./components/StockLists";
import { RightPanel } from "./components/RightPanel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockSymbol: null,
      stockDetails: {
        quote: {},
        news: [],
        chart: [],
      }
    };
  }

  handleCellClick(e) {
    const currentSymbol = e.target.parentNode.dataset.symbol;
    if (currentSymbol) {
      this.setState({ stockSymbol: currentSymbol });
    }
  }

  render() {
    return (
      <div className="clearfix">
        <StockLists handleCellClick={this.handleCellClick.bind(this)} />
        <RightPanel stockSymbol={this.state.stockSymbol}
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