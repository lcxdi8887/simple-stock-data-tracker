import React from "react";

export class SectionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.defaultText ? props.defaultText : "Title",
      buttons: props.buttons ? props.buttons : null,
    }
  }

  render() {
    return (
      <div className="subHeader sectionHeader">
        {this.state.title}
        <div className="btnsContainer">
          {this.state.buttons}
        </div>
      </div>
    );
  }
}
