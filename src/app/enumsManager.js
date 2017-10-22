const EnumsManager = {
  // supported types in IEX API https://iextrading.com/developer/docs/#list
  StockListTypes: [
    {
      type: "MostActive",
      api: "https://api.iextrading.com/1.0/stock/market/list/mostactive",
      text: "Most Active",
    }, {
      type: "Gainers",
      api: "https://api.iextrading.com/1.0/stock/market/list/gainers",
      text: "Top Gainers",
    }, {
      type: "Losers",
      api: "https://api.iextrading.com/1.0/stock/market/list/losers",
      text: "Top Losers",
    }
  ],
};

export default EnumsManager;