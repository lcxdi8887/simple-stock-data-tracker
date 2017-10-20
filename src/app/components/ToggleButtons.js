function ToggleButtons(props) {
  const buttons = props.buttons.map((button) => {
    return <button key={button.key}
                   name={button.key}
                   className={props.activeButton === button.key ? "active" : ""}
                   onClick={props.onClick}>
             {button.text}
           </button>;
  });
  return (
    <div className="toggleButtonsContainer">
      {buttons}
    </div>
  );
}

export { ToggleButtons }