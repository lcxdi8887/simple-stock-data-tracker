import React from "react";
import PropTypes from 'prop-types';

function StandardTableHeader(props) {
  const columnHeaders = props.columns.map((col) => {
    return <th key={col.key} className={col.alignRight ? "alignRight" : null} >
            {col.name}
           </th>
  });
  columnHeaders.unshift(<th key="no">no</th>);

  return (
    <thead>
      <tr>{columnHeaders}</tr>
    </thead>
  );
}

StandardTableHeader.propTypes = {
  columns: PropTypes.array.isRequired,
};

export { StandardTableHeader }