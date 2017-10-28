import React from "react";

export class RightPanel extends React.Component {
  render() {
    return (
      <div className="floatPanel">
        {this.props.stockSymbol}
      </div>
    );
  }
}
