import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return(
    <ul>
      <h3>{props.month}</h3>
      {props.selection.map((produce, index) =>
        <li id={index}>{produce}</li>
      )}
    </ul>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default Produce;
