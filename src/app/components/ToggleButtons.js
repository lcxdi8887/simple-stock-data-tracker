import React from "react";
import PropTypes from 'prop-types';

function ToggleButtons(props) {
  const activeClass = "active";
  const buttons = props.buttons.map((button) => {
    return <button key={button.type}
                   id={"toggleButton-" + button.type} >
             {button.text}
           </button>;
  });
  return (
    <div className="toggleButtonsContainer">
      {buttons}
    </div>
  );
}

ToggleButtons.propTypes = {
  buttons: PropTypes.array.isRequired,
};

export { ToggleButtons }