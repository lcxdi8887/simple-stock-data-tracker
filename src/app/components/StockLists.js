import React from "react";
import { fetchData } from "../utils";
import EnumsManager from "../enumsManager";

import { SectionHeader } from "./SectionHeader";
import { ToggleButtons } from "./ToggleButtons";
import { StandardTable } from "./StandardTable";

export class StockLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeType: EnumsManager.StockListTypes[0].type,
      stockData: [],
      updatedTime: null,
    }
  }

  componentWillMount() {
    this.fetchDataByType(this.state.activeType);
  }

  fetchDataByType(activeType) {
    const api = this.getApiByType(activeType);
    fetchData(api, function(data) {
      this.setState({ 
        updatedTime: new Date(),
        stockData: data,
      });
    }, this);
  }

  getApiByType(activeType) {
    let api = "";
    EnumsManager.StockListTypes.forEach((type) => {
      if (activeType === type.type)
        api = type.api;
    });
    return api;
  }

  handleToggleButtonsClick(e) {
    const newType = e.target.dataset.type;
    this.setState( {activeType: newType} );
    this.fetchDataByType(newType);
  }

  handelRefreshButtonClick() {
    this.fetchDataByType(this.state.activeType);
  }

  render() {
    // should I put those buttons here or componentWillMount?
    // if I put them in componentwillmount, those configs will be only generate once, but have to use this.xx to reference them, does the shallow compare or compare will tell the difference when each time render calls to save the render of them?
    const headerButtons = [];
    const toggleButtons = <ToggleButtons key="buttonsGroup"
                                         buttons={EnumsManager.StockListTypes}
                                         activeType={this.state.activeType}
                                         onClick={this.handleToggleButtonsClick.bind(this)} />;
    const refreshButton = <button key="refresh"
                                  title="refresh this stock list"
                                  className="btnRefresh"
                                  onClick={this.handelRefreshButtonClick.bind(this)} />;
    headerButtons.push(toggleButtons);
    headerButtons.push(refreshButton);

    return (
      <div className="floatPanel">
        <SectionHeader title="Stock List" buttons={headerButtons} />
        <div className="updatedTime">updated on {this.state.updatedTime ? this.state.updatedTime.toLocaleString() : "--"}</div>
        <StandardTable columns={EnumsManager.StockListColumns}
                       data={this.state.stockData} />
      </div>
    );
  }
}