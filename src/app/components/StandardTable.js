import React from "react";

export class StandardTable extends React.Component {
  render() {
    return (
      <table>
        <caption>
          {this.props.caption}
          <span className="updateDateTime">@Updated on {this.props.timeStamp}</span>
        </caption>
      </table>
    );
  }
}
