import React from "react";

export class SectionHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let btnsContainer = null;
    if (this.props.buttons !== null) {
      btnsContainer = <div className="btnsContainer">
                        {this.props.buttons}
                      </div>;
    }

    return (
      <div className="sectionHeader">
        {this.props.title ? this.props.title : "Stock List"}
        {btnsContainer}
      </div>
    );
  }
}
