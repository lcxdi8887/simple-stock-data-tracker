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
    }
  }

  handleToggleButtonsClick() {
    
  }

  handelRefreshButtonClick() {
    // const api = EnumsManager.StockListTypes[0].api;
    // fetchData(api, function(data) {
    //   debugger;
    //   this.setState((prevState) => {
    //     return {
    //       caption: "Most Active Stocks",
    //       timeStamp: new Date().toLocaleString()
    //     }
    //   });
    // }, this);
  }

  render() {
    // should I put those buttons here or componentWillMount?
    // if I put them in componentwillmount, those configs will be only generate once, but have to use this.xx to reference them, does the shallow compare or compare will tell the difference when each time render calls to save the render of them?
    const headerButtons = [];
    const toggleButtons = <ToggleButtons buttons={EnumsManager.StockListTypes} />;
    const refreshButton = <button key="refresh"
                                  title="refresh this stock list"
                                  className="btnRefresh" />;
    headerButtons.push(toggleButtons);
    headerButtons.push(refreshButton);

    return (
      <div className="floatPanel leftPanel">
        <SectionHeader title="Stock List" buttons={headerButtons} />
        <StandardTable />
      </div>
    );
  }
}

