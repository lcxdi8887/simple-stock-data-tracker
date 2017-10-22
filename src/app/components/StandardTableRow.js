import React from "react";
import PropTypes from 'prop-types';

function StandardTableRow(props) {
  const row = props.columns.map((col) => {
    return <td key={col.key}>{props.rowData[col.key]}</td>;
  });
  row.unshift(<td key="no">{props.index + 1}</td>);

  return (
    <tr>{row}</tr>
  );
}

StandardTableRow.propTypes = {
  columns: PropTypes.array.isRequired,
  rowData: PropTypes.object.isRequired,
};

export { StandardTableRow }