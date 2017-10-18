const EnumsManager = {
  // supported types in IEX API https://iextrading.com/developer/docs/#list
  StockListType: {
    mostActive: "https://api.iextrading.com/1.0/stock/market/list/mostactive",
    gainers: "https://api.iextrading.com/1.0/stock/market/list/gainers",
    losers: "https://api.iextrading.com/1.0/stock/market/list/losers",
    iexVolume: "https://api.iextrading.com/1.0/stock/market/list/iexvolume",
    iexPercent: "https://api.iextrading.com/1.0/stock/market/list/iexpercent",
  }
  // generateRandom: function() {
  //   return Math.random();    
  // },
};

export default EnumsManager;