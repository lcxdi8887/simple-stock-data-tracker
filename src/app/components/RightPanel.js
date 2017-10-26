import React from "react";

export class RightPanel extends React.Component {
  render() {
    return (
      <div>
        {this.props.stockSymbol}
      </div>
    );
  }
}
