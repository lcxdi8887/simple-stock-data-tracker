import React from "react";
import { StandardTable } from "./StandardTable";
import { SectionHeader } from "./SectionHeader";

export class StockLists extends React.Component {
  render() {
    return (
      <div className="floatPanel leftPanel">
        <SectionHeader defaultText="Top Stocks" />
        <StandardTable />
      </div>
    );
  }
}
