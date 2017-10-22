import React from "react";
import ReactDOM from 'react-dom';
import { StockLists } from "./components/StockLists";
import { RightPanel } from "./components/RightPanel";

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
    // let stockCode = e.currentTarget.title;
    // if (stockCode) {
    //   let tempapi = "https://api.iextrading.com/1.0/stock/" + stockCode + "/batch?types=quote,news,chart&range=1m&last=10";
    //   fetchData(tempapi, function(data) {
    //     this.setState({
    //       stockDetails: data,
    //       stockSymbol: data.quote.symbol,
    //     });
    //   }, this);
    // }
  }

  render() {
    return (
      <div>
        <StockLists onClickHandler={this.handleCellClick.bind(this)} />
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

const stores = [
  {  
   "symbol":"NLNK",
   "companyName":"NewLink Genetics Corporation",
   "primaryExchange":"NASDAQ Global Market",
   "sector":"Healthcare",
   "calculationPrice":"close",
   "open":10.22,
   "openTime":1508506200509,
   "close":10.08,
   "closeTime":1508529600296,
   "latestPrice":10.08,
   "latestSource":"Close",
   "latestTime":"October 20, 2017",
   "latestUpdate":1508529600296,
   "latestVolume":956017,
   "delayedPrice":10.08,
   "delayedPriceTime":1508531491933,
   "previousClose":10.29,
   "change":-0.21,
   "changePercent":-0.02041,
   "iexMarketPercent":null,
   "avgTotalVolume":3272741,
   "marketCap":314717327,
   "peRatio":-4.4,
   "week52High":25.167,
   "week52Low":5.9,
   "ytdChange":-0.04454976303317541
  },
  {"symbol":"RH","companyName":"RH","primaryExchange":"New York Stock Exchange","sector":"Consumer Cyclical","calculationPrice":"close","open":81.09,"openTime":1508506200603,"close":83.79,"closeTime":1508529721558,"latestPrice":83.79,"latestSource":"Close","latestTime":"October 20, 2017","latestUpdate":1508529721558,"latestVolume":835855,"delayedPrice":83.79,"delayedPriceTime":1508533076045,"previousClose":80.31,"change":3.48,"changePercent":0.04333,"iexMarketPercent":null,"avgTotalVolume":1247102,"marketCap":1772342084,"peRatio":55.49,"week52High":84.7,"week52Low":24.41,"ytdChange":1.6898876404494385},{"symbol":"EGAN","companyName":"eGain Corporation","primaryExchange":"NASDAQ Capital Market","sector":"Technology","calculationPrice":"close","open":3.15,"openTime":1508506200707,"close":3,"closeTime":1508529600429,"latestPrice":3,"latestSource":"Close","latestTime":"October 20, 2017","latestUpdate":1508529600429,"latestVolume":142217,"delayedPrice":3,"delayedPriceTime":1508529600429,"previousClose":3.15,"change":-0.15,"changePercent":-0.04762,"iexMarketPercent":null,"avgTotalVolume":290386,"marketCap":81691713,"peRatio":-13.64,"week52High":3.8416,"week52Low":1.3,"ytdChange":0.4634146341463416},{"symbol":"FRTA","companyName":"Forterra Inc.","primaryExchange":"Nasdaq Global Select","sector":"Basic Materials","calculationPrice":"close","open":5.09,"openTime":1508506200203,"close":5.01,"closeTime":1508529600371,"latestPrice":5.01,"latestSource":"Close","latestTime":"October 20, 2017","latestUpdate":1508529600371,"latestVolume":584530,"delayedPrice":5.01,"delayedPriceTime":1508532494915,"previousClose":5.01,"change":0,"changePercent":0,"iexMarketPercent":null,"avgTotalVolume":1220801,"marketCap":321661008,"peRatio":-15.18,"week52High":22.76,"week52Low":3.02,"ytdChange":-0.7720655141037306},{"symbol":"PAVM","companyName":"PAVmed Inc.","primaryExchange":"NASDAQ Capital Market","sector":"Healthcare","calculationPrice":"close","open":5.61,"openTime":1508510205271,"close":5.45,"closeTime":1508529600409,"latestPrice":5.45,"latestSource":"Close","latestTime":"October 20, 2017","latestUpdate":1508529600409,"latestVolume":7650,"delayedPrice":5.45,"delayedPriceTime":1508529600409,"previousClose":5.7,"change":-0.25,"changePercent":-0.04386,"iexMarketPercent":null,"avgTotalVolume":16786,"marketCap":72655100,"peRatio":-20.19,"week52High":12.12,"week52Low":2.5359,"ytdChange":-0.20368205727644653},{"symbol":"CDXC","companyName":"ChromaDex Corporation","primaryExchange":"NASDAQ Capital Market","sector":"Healthcare","calculationPrice":"close","open":4.17,"openTime":1508506200523,"close":4.23,"closeTime":1508529600389,"latestPrice":4.23,"latestSource":"Close","latestTime":"October 20, 2017","latestUpdate":1508529600389,"latestVolume":132433,"delayedPrice":4.23,"delayedPriceTime":1508529600389,"previousClose":4.17,"change":0.06,"changePercent":0.01439,"iexMarketPercent":null,"avgTotalVolume":338475,"marketCap":203290886,"peRatio":-26.44,"week52High":4.8472,"week52Low":2.251,"ytdChange":0.22608695652173919},{"symbol":"BCRX","companyName":"BioCryst Pharmaceuticals Inc.","primaryExchange":"Nasdaq Global Select","sector":"Healthcare","calculationPrice":"close","open":5.11,"openTime":1508506200538,"close":4.8,"closeTime":1508529600333,"latestPrice":4.8,"latestSource":"Close","latestTime":"October 20, 2017","latestUpdate":1508529600333,"latestVolume":1236482,"delayedPrice":4.87,"delayedPriceTime":1508531544727,"previousClose":5.1,"change":-0.3,"changePercent":-0.05882,"iexMarketPercent":null,"avgTotalVolume":1994172,"marketCap":471987734,"peRatio":-7.74,"week52High":9.25,"week52Low":3.75,"ytdChange":-0.24528301886792458},{"symbol":"CNXR","companyName":"Connecture Inc.","primaryExchange":"NASDAQ Global Market","sector":"Healthcare","calculationPrice":"close","open":0.5,"openTime":1508506200228,"close":0.49,"closeTime":1508529600165,"latestPrice":0.49,"latestSource":"Close","latestTime":"October 20, 2017","latestUpdate":1508529600165,"latestVolume":137974,"delayedPrice":0.27,"delayedPriceTime":1508532396976,"previousClose":0.5,"change":-0.01,"changePercent":-0.02,"iexMarketPercent":null,"avgTotalVolume":71635,"marketCap":11210116,"peRatio":-0.48,"week52High":2.44,"week52Low":0.47,"ytdChange":-0.7134502923976608},{"symbol":"ARCI","companyName":"Appliance Recycling Centers of America Inc.","primaryExchange":"NASDAQ Capital Market","sector":"Consumer Cyclical","calculationPrice":"close","open":0.99,"openTime":1508506200352,"close":0.99,"closeTime":1508529600474,"latestPrice":0.99,"latestSource":"Close","latestTime":"October 20, 2017","latestUpdate":1508529600474,"latestVolume":88213,"delayedPrice":1.01,"delayedPriceTime":1508529600474,"previousClose":0.99,"change":0,"changePercent":0,"iexMarketPercent":null,"avgTotalVolume":161109,"marketCap":6588811,"peRatio":null,"week52High":1.75,"week52Low":0.5151,"ytdChange":-0.1081081081081082},{"symbol":"DRYS","companyName":"DryShips Inc.","primaryExchange":"NASDAQ Capital Market","sector":"Industrials","calculationPrice":"close","open":3.15,"openTime":1508506200281,"close":3.61,"closeTime":1508529600229,"latestPrice":3.61,"latestSource":"Close","latestTime":"October 20, 2017","latestUpdate":1508529600229,"latestVolume":9057856,"delayedPrice":3.56,"delayedPriceTime":1508532983407,"previousClose":3.14,"change":0.47,"changePercent":0.14968,"iexMarketPercent":null,"avgTotalVolume":3187209,"marketCap":258355386,"peRatio":null,"week52High":424536,"week52Low":0.98,"ytdChange":-0.9998731517400349}
];