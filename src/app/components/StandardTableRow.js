import React from "react";
import PropTypes from 'prop-types';

function StandardTableRow(props) {
  const row = props.columns.map((col) => {
    const value = props.rowData[col.key];
    return <td key={col.key} className={col.alignRight ? "alignRight" : null} >
            {col.numOfPrecision ? value.toFixed(col.numOfPrecision) : value}
           </td>;
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