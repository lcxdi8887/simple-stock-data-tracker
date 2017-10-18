import React from "react";
import { fetchData } from "../utils";
import EnumsManager from "../enumsManager";
import { StandardTable } from "./StandardTable";
import { SectionHeader } from "./SectionHeader";

export class StockLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "New Title",
      caption: "Stock List",
      timeStamp: new Date().toLocaleString(),
    }
  }

  settingClickHandler() {
    
  }

  refreshClickHandler() {
    const api = EnumsManager.StockListType.mostActive;
    fetchData(api, function(data) {
      debugger;
      this.setState((prevState) => {
        return {
          caption: "Most Active Stocks",
          timeStamp: new Date().toLocaleString()
        }
      });
    }, this);
  }

  render() {
    const headerButtons = [];
    const settingButton = <button key="settings" 
                                  title="settings"
                                  className="btnSettings"
                                  onClick={this.settingClickHandler.bind(this)} />;
    const refreshButton = <button key="refresh"
                                  title="refresh this stock list"
                                  className="btnRefresh"
                                  onClick={this.refreshClickHandler.bind(this)} />;
    headerButtons.push(refreshButton);
    headerButtons.push(settingButton);

    return (
      <div className="floatPanel leftPanel">
        <SectionHeader buttons={headerButtons}
                       title={this.state.title}/>
        <StandardTable caption={this.state.caption}
                       timeStamp={this.state.timeStamp}/>
      </div>
    );
  }
}

