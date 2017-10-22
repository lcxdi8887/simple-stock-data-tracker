import React from "react";
import PropTypes from 'prop-types';

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
        {this.props.title}
        {btnsContainer}
      </div>
    );
  }
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired, // the "isRequired" will check if the prop is undefined/null by '===', so empty string will pass this check
  buttons: PropTypes.array,
};