# Stock Information Display Tool

## Description:
This tool allows user to view up-to-date stocks information, news and recent data.

## Some New Features:
- Adding complex news view - done
- Adding search bar to allow users to search stock by symbol
- Adding details table for selected stock - done
- Adding functionality to allow user config the view of stock quote table:
    - setup number of columns on each row (select between 2-6 for ux purpose) - done
    - setup which column data they would like to see in this table - done
- Allowing user to select axis for the line chart - working
- Allowing user to fold detail sections (quote, news, chart) by click on blue section header - done

## Demo
### Overview
This is a tool to help user see top stocks' details, news and past chart easily.
![Overview](./demo/overview.png)

### Top Stocks Table
This tool will automatically retrieve up-to-date top stocks from stock market and listed on the left.
Users are able to select one of stocks if they would like to see more details.
![Top Stocks Table](./top-stock-table.PNG)

### Stock Details
This section will display summary and all available data of the selected stock.
![Stock Details](./stock-details.PNG)
Users can open a setting window for this section by clicking the top right button. They are able to select how many columns they would like to see on each row and which data they prefer to watch. Thus they can focus on fields they are interested in.
![Stock Details Settings](./stock-details-settings.PNG)

### Stock News (complex/compact)
This section will list maximum 10 latest news of the selected stocks.
There are two views that users can simply switch by clicking the toggle button. The complex view offers more information about each news, such as summary of news.

Compact View
![News With Compact View](./stock-news-simple-view.PNG)
Complex View
![News With Complex View](./stock-news-complex-view.PNG)

### Stock Chart
This section will draw a line chart about recent volume data of the selected stock. Currently, it only allows users to see the volume data. This part will be enhanced in the new repository.
![Recent Volume Data](./stock-chart.PNG)

## Thanks to
- [IEX Dev API](https://iextrading.com)
